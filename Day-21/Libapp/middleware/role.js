function roleCheck(roles) {
    return (req, res, next) => {
        try {
            
                //verify the user role
                const userRole = req.user;
                if (!userRole || !roles.includes(userRole)) {
                    return res.status(403).send("Access denied !")
                }
                next()
            }

         catch (error) {
            console.error(error);
            res.status(500).send("Server Error !")
        }
    }
}

module.exports = roleCheck