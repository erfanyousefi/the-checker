import { MulterFile } from "src/common/types/public";
export interface IBedFilesUpload {
    samplePhotoTopQuestion: MulterFile[];
    bedDoesNotLookFreshPhotos: MulterFile[];
    bedSheetInNotProperlyTightenedPhotos: MulterFile[];
    extraBedPhotos: MulterFile[];
    DamageReportPhotos: MulterFile[];
}
