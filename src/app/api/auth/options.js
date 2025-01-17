import CredentialsProvider from 'next-auth/providers/credentials';
//here would use providers too (github, facebook, schools...)

export const options = {
    providers: [
        //would add providers here
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: {
                    label: "Username:",
                    type: "text",
                    placeholder: "Username"
                },
                password: {
                    label: "Password:",
                    type: "text",
                    placeholder: "Password"
                },
            },
            async authorize(credentials) {
                try {
        
                    let insertQuery = `SELECT * FROM person WHERE username='${credentials.username}'`;
                    const result = await pool.query(insertQuery);
                    
                    if (result.rowCount > 0) {
                        const user = result.rows[0];
                        const auth = await bcrypt.compare(credentials.password, user.pwhash);
                        if (auth) {
                            const user_uid = user.person_uid;
                            const user_username = user.username;
                            const user_type = user.user_type;
                            const school_uid = user.school_uid;
            
                            return { user_uid, user_username, user_type, school_uid };
                        } else {
                            throw new Error("incorrect password");
                        }
                        
                    } else {
                        throw new Error("incorrect username");
                    }
                } catch (err) {
                    throw new Error(err.message);
                }
            }
        })
    ]
    //could add pages, session here too for specific pages but it's fine for now
}