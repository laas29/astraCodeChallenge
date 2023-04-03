const getKeanuPicture = async (width: number, height: number, young: boolean, grayScale: boolean): Promise<String> => {
    let pictureOptions = young ? 'y' : '';
    pictureOptions = pictureOptions + (grayScale ? 'g' : '');
    const url = `https://placekeanu.com/${width}/${height}/${pictureOptions}`;
    const response = await fetch(url);
    return await response.text();
};

export default getKeanuPicture;