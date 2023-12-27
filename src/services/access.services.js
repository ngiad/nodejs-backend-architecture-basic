'use strict'

const bcrypt = require('bcrypt')

const shopModel = require("../models/shop.model")
const RolesShop = {
    SHOP : "SHOP",
    WRITER : "WRITER",
    EDITER : "EDITER",
    ADMIN : "ADMIN"
}

class AccessService {
    static signUp = async ({ name, email, password },status) => {
        try {
            const holdelShop = await shopModel.findOne({ email }).lean() // lean giam tai size cua object
            if (holdelShop){
                status(300)
                throw new Error('shop already registered!') 
            }
                
            const newShop = await shopModel.create({ name, email, password, roles : [RolesShop.SHOP] })
            if(newShop){

            }

        } catch (error) {
            return {
                code: 500,
                message: error.message,
                status: 'error'
            }
        }
    }
}


module.exports = AccessService
