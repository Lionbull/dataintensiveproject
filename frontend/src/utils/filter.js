const filter = (data, filters) => {
    let filteData = structuredClone(data);

    for (const property in filters) {
        if (filters[property] === "Ascending") {
            filteData.sort((a,b) => {
                if (a[property] < b[property]) {
                    return -1;
                } else if(a[property] > b[property]) {
                    return 1;
                }
                return 0;
            });
        } else if (filters[property] === "Descending") {
            filteData.sort((a,b) => {
                if (a[property] > b[property]) {
                    return -1;
                } else if(a[property] < b[property]) {
                    return 1;
                }
                return 0;
            });
        }
    }

    return filteData;
}

export default filter;