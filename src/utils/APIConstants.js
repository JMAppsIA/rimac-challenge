module.exports.RESPONSE_CONSTANTS = {
    OK_STATUS: {
        code: 200,

    }
}; 

module.exports.ERROR_CONSTANTS = {
    NOT_FOUND: {
        code:"SWAPIERR001",
        httpCode: 404,
        message:"Dato no encontrado en SWAPI. Se omitio el registro."
    },
    ERROR_SAVE: {
        code: 'SWAPIERR002', 
        httpCode:500,
        message: 'Error al guardar en dynamoDB'
    },
    ERROR_QUERY: {
        code: 'SWAPIERR003', 
        httpCode:500,
        message: 'Error al obtener data'
    },
    DYNAMO_NOT_FOUND: {
        code:"SWAPIERR004",
        httpCode: 404,
        message:"Dato no encontrado en dynamoDB."
    },
    VALIDATION_ERROR: {
        code: "SWAPIERR005",
        httpCode: 404,        
    }
};

