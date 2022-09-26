module.exports = () => (req, res, next) => {
    console.log('Handling POST request');
    next();
}