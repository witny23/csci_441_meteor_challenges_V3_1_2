
git mongoDB challenges for vids 11a, 12a

GOALS

    To practice concepts as found in the videos/git repo


        11a - remove mongoDB entries with a button: 1bf477031e968784b9b666d0f920d7a12be579d1
        12a - mongoDB update operators $inc, $set: 8c7870868cbe1fe16948d0dc5324232c93b94798


MONGO CONCEPTS
    db.candidates_collection.find()
    db.candidates_collection.deleteMany({name: 'pat'})
    db.candidates_collection.deleteOne({_id: 'xyz'})

    $set will allow us to set one field
        db.candidates_collection.update({_id: 'foo'}, {$set: {vodes: 5}})
    
    $inc can be used to increment
        db.candidates_collection.update({_id: 'foo'}, {$inc: {vodes: 1}})


Stop runaway mongo on windows

taskkill /f /im mongod.exe
taskkill /f /im node.exe