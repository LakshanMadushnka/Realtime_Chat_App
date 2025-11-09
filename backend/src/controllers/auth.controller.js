

export const signup = (req, res) => {
    const {fullName, email, password} = req.body
    try {
        //hash password

        
    } catch (error) {
        
    }
};

export const login = (req, res) => {
    res.send("login route");
};

export const loguot = (req, res) => {
    res.send("logout route");
};

