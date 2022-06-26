setInterval(() => {
    console.log('start');
    try {
        throw new Error('server break')
    } catch (error) {
        console.log(error);
    }
}, 1000);