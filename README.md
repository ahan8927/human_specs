<div align="center">

![JavaScript](https://img.shields.io/badge/-JavaScript-f7df1e?style=flat-square&logo=JavaScript&logoColor=black)
![React](https://img.shields.io/badge/-React-61dafb?style=flat-square&logo=React&logoColor=white)
![CSS3](https://img.shields.io/badge/-CSS3-1572b6?style=flat-square&logo=CSS3&logoColor=white)
![Docker](https://img.shields.io/badge/-Docker-2496ed?style=flat-square&logo=Docker&logoColor=white)
![Python](https://img.shields.io/badge/-Python-3776ab?style=flat-square&logo=Python&logoColor=white)
![Flask](https://img.shields.io/badge/-Flask-black?style=flat-square&logo=Flask&logoColor=white)
![SQLAlchemy](https://img.shields.io/badge/-SQLAlchemy-d01f00?style=flat-square&logo=SQLAlchemy&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/-PostgreSQL-336791?style=flat-square&logo=postgreSQL&logoColor=white)

# Human Specs
## A Beat Making Production Application

**TOC**
[About](#about-human-specs) ● [Features](#features) ● [How It Works](#how-it-works) ● [Installation](#installation) ● [Development](#development) ● [Contact Me](#contact-me)

**Create your foundational beat sequences and melodies in a pleasing distractionless application! 🌱**
Create and save beats to your own free personal library! 🖍️
Enjoy a clean aesthetic to boost your creativity and production. 💎


![Dashboard webpage for Musely](Documentation/Musely.PNG)


### Try the Demo!
<a href="https://musely.herokuapp.com/">
click here!
</a>

</div>

---

<div align="center">

## About Human Specs

[https://human-spec.herokuapp.com/ ](https://human-spec.herokuapp.com/)

</div>

Muse was inspired by Midi Fighter controllers and online beat sequencers that left a void where a much needed mixup could be.
Muse's minimalistic design is catered towards an intuitive, non intrusive user experience to allow the seemless transfer of ideas without distraction.
Muse allows music enthusiasts to explore music creation in the browser to its fullest with dynamic libraries and an intuitive beat creation design.

Each board that an artist creates, they are provided 16 different modifiable beat pads to create thier perfect beat sequence mix. Each pad can be customized in many ways ranging from the note signature to bpm and how long each bar is.

<br clear="both">

## Features
</div>

* Create boards populated with beats saved to a set of 16 buttons.
* Each button has a sequencer that you can drag notes from a library onto the playboard.
* Load and save previously created boards to and from your personal library.
* Set a global BPM.
* Select a local speed multiplier.

### Future Stretch Goals 
(in no particular order)
- **Follower Social System**
- **Custom Sound libraries**
- **Share Beat Boards wth friends**
- **Record your Jam**

<div align="center">

## How It Works

</div>

>
> **Users can:**
> 1. [Create an account](#1-create-an-account)
> 2. [Select a test](#2-select-a-test)
> 3. [ask for help](#3-ask-for-help)
> 4. [record your scores](#4-record-your-scores)
> 5. [visualize progress](#5-view-recorded-scores)
> 6. [Installation](#installation)
>

### 1. Create an Account

- To **create an account**, click the login button at the top.
- If you dont have an account there will be an option at the bottom of the popup to create one.
- Fill out the form.

<br clear="both">

### 2. Select a Test

- To **select a test**, click the dashboard icon at the top left of the help button. 
- You will be provided a suite of tests to choose from. You can select one from there.

<br clear="both">

### 3. Ask for Help

- To **ask for help**, click the ? button at the top of the screen.
- A popup will be shown giving instructions dependant upon the test you wish help with.

<br clear="both">

### 4. Record Your Scores

- **After** completing a test, your scores and results will automatically be sent to the server and saved.

<br clear="both">

### 5. View Recorded Scores

- To **View**, your scores, click your profile at the top. 
- Once there, click a test to expand and have your results visualized in a graph.
- **IMPORTANT**... you must be logged in to view your scores.
<br clear="both">

## Installation

</div>

1. Clone this repository.

   ```bash
   git clone https://github.com/ahan8927/human_specs.git
   ```

2. Install dependencies.

      ```bash
      pipenv install --dev -r dev-requirements.txt && pipenv install -r requirements.txt
      ```

3. Create a `.env` file based on the example with proper settings for your
   development environment.

4. Setup your PostgreSQL user, password, and database and make sure it matches your `.env` file.

5. Get into your pipenv, migrate your database, seed your database, and run your flask app.

   ```bash
   pipenv shell
   ```

   ```bash
   flask db upgrade
   ```

   ```bash
   python seeder.py
   ```

   ```bash
   flask run
   ```

6. To run the React App in development, `cd` into the `react-app` directory, then run `npm start`.

>
> **IMPORTANT!**
>    If you add any python dependencies to your pipfiles, you'll need to regenerate your requirements.txt before deployment.
>    You can do this by running:
>
>    ```bash
>    pipenv lock -r > requirements.txt
>    ```
>
> **ALSO IMPORTANT!**
>    psycopg2-binary MUST remain a dev dependency because you can't install it on apline-linux.
>    There is a layer in the Dockerfile that will install psycopg2 (not binary) for us.
>


<div align="center">

  ## Development

  **DEV TOC**
  [Technologies](Documentation/development.md#technologies) ● [Concepts](Documentation/development.md#concepts) ● [Models](Documentation/development.md#models) ● [Routes](Documentation/development.md#routes) ● [Wireframes](Documentation/development.md#wireframes) ● [Dev Snapshots](Documentation/development.md#development-snapshots)

  This section is kept in a separate document [HERE](Documentation/development.md).
  It details the technical aspects of this project's development.
  A few sample snapshots are below from the development process.

</div>

---

<div align="center">

  ## Contact Me

  Thank you for taking a look at Human Specs.
  Please feel free to reach out and ask me anything.

</div>

### Aaron Hanson
*(Full-stack developer, Open to work)*
<!-- <a href="readme/Aaron Hanson resume(v2.0).pdf" download>![Resume PDF](https://img.shields.io/badge/-Resume-f00?style=flat-square&logo=adobe-acrobat-reader&logoColor=white)</a> -->
[![Aaron Hanson's email](https://img.shields.io/badge/aaron.hanson.brb@gmail.com-f4b400?style=flat-square&logo=gmail&logoColor=black&link=mailto:aaron.hanson.brb@gmail.com)](mailto:aaron.hanson.brb@gmail.com)
[![LinkedIn](https://img.shields.io/badge/-LinkedIn-0077b5?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/aaron-hanson-brb/)](https://www.linkedin.com/in/aaron-hanson-brb/)
[![GitHub ahan8927](https://img.shields.io/github/followers/ahan8927?label=follow&style=social)](https://github.com/ahan8927)
