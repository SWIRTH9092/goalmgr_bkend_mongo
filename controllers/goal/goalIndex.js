



//index route
// router.get("/", isLoggedIn, async (req, res) => {
    router.get("/", async (req, res) => {
        try {
            const username = req.payload.username;
            const notes = await Note.find({username});
            res.json(notes);
        }
        catch(error) {
            res.status(400).json({error});
        }
    
    })