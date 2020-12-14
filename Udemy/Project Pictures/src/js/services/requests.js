const postData = async (url, data) => {
    const resault = await fetch(url, {
        method: 'POST',
        body: data
    })

    return await resault.text()
}

const getResource = async (url) => {
    const resault = await fetch(url);

    if(!resault.ok){
        throw new Error(`Could not fetch ${url}, status: ${resault.status}`)
    }

    return await resault.json()
}

export {postData, getResource};