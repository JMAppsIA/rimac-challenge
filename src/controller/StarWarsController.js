const { required } = require("@hapi/joi");
const StarWarsService = require("../service/StarWarsService");
const { validateRegistrarNombres } = require("../validations/validateRegistrarNombres");
const ValidationUtils = require("../utils/ValidationUtils");
const Utils = require("../utils/Utils");

    module.exports.registrarNombres = async (event) => {          
        try {
            console.log(`------ registrarNombres ------`);
            const request = Utils.getRequest(event);
            await ValidationUtils.validateRequest(request,validateRegistrarNombres());                 
            const result = await StarWarsService.registrarNombres(request);
            return Utils.createResponse(result);            
        } catch (error) {
            console.error(`error >>> ${error}`);            
            return Utils.createErrorResponse(error);
        }     
    }

    module.exports.obtenerNombres = async (event) => {
        try {   
            console.log(`------ obtenerNombres ------`);     
            const result = await StarWarsService.obtenerNombresDynamo(event);
            return Utils.createResponse(result);            
        } catch (error) {
            console.error(`error >>> ${error}`);
            return Utils.createErrorResponse(error);
        }
    }
