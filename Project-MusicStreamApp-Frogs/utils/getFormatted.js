// Format Google Drive video URL
const getFormattedVideoUrl = (url) => {
    if (url.includes('drive.google.com/file/d/')) {
        const fileId = url.split('/file/d/')[1].split('/')[0];
        return `https://drive.google.com/uc?export=download&id=${fileId}`;
    }
    return url; 
}

// Format Google Drive image URL
const getFormattedImageUrl = (url) => {
    if (url.includes('drive.google.com/file/d/')) {
        const fileId = url.split('/file/d/')[1].split('/')[0];
        return `https://drive.google.com/uc?export=view&id=${fileId}`;
    }
    return url;
}

export { getFormattedVideoUrl, getFormattedImageUrl };
