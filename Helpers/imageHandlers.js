
const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
        if (file) {
            const fileReader = new FileReader();
            fileReader?.readAsDataURL(file);
            fileReader.onload = () => {
                resolve(fileReader.result);
            };
            fileReader.onerror = () => {
                reject(error);
            };
        }
    });
};
export const onSelectFile = async (e) => {
    // setFileName(e.target.files[0]?.name);
    const base64 = await convertBase64(e.target.files[0]);

    if (base64 instanceof Error) {
        return;
    }
    return { base64, file: e.target.files[0] }
};