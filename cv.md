# [rsschool-cv](https://your-github-account.github.io/rsschool-cv/cv)

## Sabokhat Sobirova

### &#128231; CONTACTS
 ***Email:*** [ssobirova333@gmail.com](https://ssobirova333@gmail.com)\
 ***LinkedIn:*** [linkedin.com/in/sabohat-sobirova-9b24aa210](https://www.linkedin.com/in/sabohat-sobirova-9b24aa210)\
 ***Github:*** [github.com/Sabohatfrontend](https://github.com/Sabohatfrontend)

___

### &#128105; SUMMARY
>I am Front-end developer with a strong foundation in web development. I am a fast learner and always eager to expand my knowledge and skills in front-end development. As for listing my top skills, I can name the followings: hard working, attentive to details. I am a team player with good problem-solving skills and a strong work ethic.

___
### &#128188; PROFESSIONAL EXPERIENCE
 **iTransition(Tashkent, remote) | Intern Developer(sep/2023-nov/203)**\
 iTransition is a global software engineering company. I contributed to both front and back-end projects. I worked independently and remotely while managing the course project assigned to me.
* Implemented a Web application for personal collection management (books, post-stamps, whiskeys, etc.)
* Developed an admin panel.
* **Stack** MERN(MongoDb, Express, React, Node.js)

___
### &#128187; SKILLS
1. HTML & CSS
1. Responsive Web Design
1. Javascript
1. Git, Github
1. React
1. Node & Express, MongoDB (basic)

___

### &#128187; CODE
```
router.post('/', async (req, res) => {
    const { error } = validate(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }

    const user = await User.findOne({ email: req.body.email });
    if (!user) {
        return res.status(400).send('Email or Password is invalid!');
    }

    const isValidPassword = await bcrypt.compare(req.body.password, user.password);

    if (!isValidPassword) {
        return res.status(400).send('Email or Password is invalid!');
    }

    const token = user.generateAuthToken();
    res.header('x-auth-token', token).send(true);
});
```
___
### &#127979; EDUCATION
(2012-2016) - National University of Uzbekistan named after Mirzo Ulugbek / Applied mathematics and informatics [nuu.uz](https://nuu.uz)

___

### COURSES
* [Javascript/Front-end Mentoring Program (in English)](https://rs.school/js-en/) - ongoing
* [JavaScript/Front-end. Stage 0](https://rs.school/js-stage0/)
* [Online Html and CSS foundation course](https://youtu.be/h2ucBIYlS1Q?si=CLbTA2G-zNicWqE_)

___

### &#128491; LANGUAGES
* English: (IELTS 5.0)
* Uzbek: Native
