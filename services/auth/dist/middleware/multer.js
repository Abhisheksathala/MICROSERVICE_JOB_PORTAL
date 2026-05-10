import multer from "multer";
const storage = multer.memoryStorage();
export const UploadFile = multer({
    storage
}).single('file');
//# sourceMappingURL=multer.js.map