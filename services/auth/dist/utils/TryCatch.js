import ErrorHandler from "./errorHandler.js";
export const TryCatch = (controller) => async (req, res, next) => {
    try {
        await controller(req, res, next);
    }
    catch (error) {
        if (error instanceof ErrorHandler) {
            return res.status(error.statusCode).json({ message: error.message, success: false });
        }
        res.status(500).json({ message: error.message || "Internal Server Error", success: false });
    }
};
//# sourceMappingURL=TryCatch.js.map