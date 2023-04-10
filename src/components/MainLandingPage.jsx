import React, { useState } from 'react'
import "./style.css";
import styled from "styled-components";
import { Link } from 'react-router-dom';

// import Accordion from '@mui/material/Accordion';
const Maindiv = styled.div`
width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    @media (min-width: 576px){
        max-width: 540px;
    }
    @media (min-width: 768px){
        max-width: 720px;
    }
    @media (min-width: 992px){
      max-width: 960px;
    }

    @media (min-width: 1200px){
      max-width: 1140px;
    }

`;
const Firstdiv = styled.div`
display: grid;
grid-template-columns: 35% 60%;
grid-column-gap: 5%;
align-items: center;
`;
const FirstImg = styled.div`
width:100%;
// padding: 3px 15px 2px 15px;
`;
const InfoDiv = styled.div``;
const Rimg = styled.img`
border-radius: 10px;
box-shadow: 0 3px 10px rgb(0 0 0/0.2);`;
const Mainhead = styled.h2`
font-size: 24px;
color: #343a40;
margin-bottom: 0.5rem;
font-weight: 500;
line-height: 1.2;
 `;
const Type = styled.h3`
 font-size: 16px;
 color: #6c757d;
 margin-bottom: 0.5rem;
    font-weight: 500;
    line-height: 1.2;
 `;
const Place = styled.h4`
 font-size: 14px;
 color: #6c757d;
 margin-bottom: 0.5rem;
    font-weight: 500;
    line-height: 1.2;
 `;
const Mainbtn = styled.div`
 height: 42px;
 width: auto;
margin-bottom: 20px;
`;
const FlexDiv = styled.div`
border-radius:10px;
display:flex;
align-items:center;
justify-content:space-between;
padding:10px;
box-shadow: 1px 0 3px 6px rgba(158,158,158,.16);
// height:60px;
`
const ContentDiv = styled.div`

`
const Aboutdiv = styled.div`
margin-bottom: 25px;
`;
const Btn = styled.button`
 background-color: #ff214f;
 display: inline-block;
 border-radius:15px;
 padding: 8px 15px;
 font-size:16px;
 font-weight:700;
 margin-bottom:20px;
 border: 2px solid #ff214f;
 color:#fff;
 transition:.4s ease-in-out; 
 cursor:pointer;
 @media only screen and (min-width: 700px){
    width:300px;
    font-size:15px
 }
 &:hover{
    background:white;
    color:black;
    border:2px solid red;

 }
 `;
const Secondiv = styled.div`
 display:flex;
 margin: 40px 0 0;`;
const Aboutpara = styled.p``;
const Gimg = styled.img`
margin: 0 5px 0 0;`;
const Gallerytag = styled.div`
background-color: #fff;
margin-bottom:1rem;
font-size: 14px;
    padding: 5px 10px;
    box-shadow: 0 3px 15px rgba(0,0,0,.1);
    border-radius: 10px;
display:flex;
align-items:center;`;
const Gallerydiv = styled.span`
color: #000;
font-weight: 500;`;
const Allimg = styled.div`
box-shadow: 0 0 10px rgba(0,0,0,.08);
padding: 20px;
border-radius: 15px;`;
const Imagesdiv = styled.div`
margin:10px 0 0;`;
const allImages = [
    {
        image: "https://wpcdn.starclinch.in/2019/03/26642.jpg"
    },
    {
        image: "https://wpcdn.starclinch.in/2019/03/26637.jpg"
    },
    {
        image: "https://wpcdn.starclinch.in/2019/03/26636.jpg"
    },

    {
        image: "https://wpcdn.starclinch.in/2019/03/26640.jpg"
    },
    {
        image: "https://wpcdn.starclinch.in/2019/03/26625.jpg"
    },
    {
        image: "https://wpcdn.starclinch.in/2019/03/26639.jpg"
    },
    {
        image: "https://wpcdn.starclinch.in/2019/03/26634.jpg"
    },
    {
        image: "https://wpcdn.starclinch.in/2019/03/26624.jpg"
    },
    {
        image: "https://wpcdn.starclinch.in/2019/03/26627.jpg"
    },
    {
        image: "https://wpcdn.starclinch.in/2019/03/26641.jpg"
    },
    {
        image: "https://wpcdn.starclinch.in/2019/03/26635.jpg"
    },
    {
        image: "https://wpcdn.starclinch.in/2019/03/26631.jpg"
    },
    {
        image: "https://wpcdn.starclinch.in/2019/03/26630.jpg"
    },
    {
        image: "https://wpcdn.starclinch.in/2019/03/26638.jpg"
    },
    {
        image: "https://wpcdn.starclinch.in/2019/03/26623.jpg"
    },
    {
        image: "https://wpcdn.starclinch.in/2019/03/26626.jpg"
    },
    {
        image: "https://wpcdn.starclinch.in/2019/03/26632.jpg"
    },
    {
        image: "https://wpcdn.starclinch.in/2019/03/26633.jpg"
    },
    {
        image: "https://wpcdn.starclinch.in/2019/03/26628.jpg"
    }
];
const MainLandingPage = () => {

    const [modal, setModal] = useState(-1);
    const [accordian, setAccordian] = useState(false);
    const [bioactive,setBioactive] = useState()
    return (
        <>
            <Maindiv>
                <Firstdiv>
                    <FirstImg>
                        <Rimg src='https://bucketdata.blob.core.windows.net/s3data/starclinchwpimages/starclinch1/wp-content/uploads/2019/03/ranbir-kapoor-profile.jpg' alt='ranbir' />
                    </FirstImg>
                    <InfoDiv>
                        <Aboutdiv>
                            <Mainhead>Ranbir Kapoor</Mainhead>
                            <Type>(CELEBRITY  APPEARANCE)</Type>
                            <Place>Mumbai, Mahrashtra</Place>
                        </Aboutdiv>
                        <Mainbtn>
                            <Link to='/checkout'>
                            <Btn>See Price And Book</Btn>
                            </Link>
                            </Mainbtn>
                        <div>
                            <Aboutpara>The 'ROCKSTAR' who is a heart throb of millions,
                                Ranbir Kapoor is one of the finest actors in
                                Bollywood and is a true versatile performer</Aboutpara>
                        </div>
                    </InfoDiv>
                </Firstdiv>
                <Secondiv>
                    <Gallerytag>
                        <Gimg src='https://starclinch.com/static/mobile/images/profile/gallery_icon.svg' />
                        <Gallerydiv>Gallery</Gallerydiv>
                    </Gallerytag>
                </Secondiv>
                <Imagesdiv>
                    <Allimg>
                        <div
                            className="App"
                        // style={{ columnCount: 4,
                        //       margin: "0 auto" }}
                        >
                            {allImages.map((data, id) => {
                                return (
                                    <>
                                        <img
                                            className='content_image'

                                            src={data.image}
                                            onClick={() => setModal(id)}
                                        />
                                    </>
                                );
                            })}
                            {modal >= 0 && (
                                <div
                                    style={{
                                        transform: "scale(1)",
                                        position: "fixed",
                                        backgroundColor: "rgba(0,0,0,.9)",
                                        zIndex: "99",
                                        height: "100%",
                                        width: "100%",
                                        top: 0,
                                        left: 0
                                    }}
                                >
                                    <button
                                        style={{
                                            right: "1%",
                                            top: "10px",
                                            position: "absolute"
                                        }}
                                        onClick={() => setModal(-1)}
                                    >
                                        x
                                    </button>
                                    <div
                                        style={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            height: "100%",
                                            alignItems: "center"
                                        }}
                                    >
                                        {modal > 0 ? (
                                            <button

                                                onClick={() => setModal(modal - 1)}
                                            >
                                                previous
                                            </button>
                                        ) : (
                                            <div></div>
                                        )}
                                        <div
                                            style={{
                                                left: "50%",
                                                top: "50%",
                                                //   width: "78%",
                                                height: "78%"
                                            }}
                                        >
                                            <img
                                                style={{
                                                    border: "10px solid #fff",
                                                    borderRadius: "10px",
                                                    maxWidth: " 100%",
                                                    maxHeight: "100%"
                                                }}
                                                src={allImages[modal]?.image}
                                            />
                                        </div>
                                        {modal < allImages.length - 1 ? (
                                            <button

                                                onClick={() => setModal(modal + 1)}
                                            >
                                                next
                                            </button>
                                        ) : (
                                            <div></div>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    </Allimg>
                </Imagesdiv>
                <div style={{ textAlign: "center", marginTop: " 50px" }}>
                    <Mainbtn><Link to='/checkout'>
                            <Btn>See Price And Book</Btn>
                            </Link></Mainbtn>
                </div>

                <FlexDiv onClick={()=>setBioactive(!bioactive)}>
                    <div style={{display:"flex",alignItems:"center"}}>
                    <img style={{margin: "0 15px 0 0"}}src='https://stcdn.starclinch.in/mobile/images/profile/biography_icon.svg'/>
                    <div>
                        Biography
                    </div>
                    </div>
                    <img src='down.png' style={bioactive ? {transform:'rotate(180deg)'} : {}}/>
                </FlexDiv>
                {bioactive &&
                    <ContentDiv>
                         Ranbir Kapoor is a Bollywood Superstar.&nbsp;A recipient of several
          accolades including five FILMFARE AWARDS, he is one of the most
          popular and highest paid celebrities in India. He&nbsp;is the grandson
          of well acclaimed Actor-Director Raj Kapoor&nbsp;and the son
          of&nbsp;actors&nbsp;Neetu Kapoor&nbsp;&amp;&nbsp;Rishi Kapoor. At
          the&nbsp;LEE&nbsp;STRASBERG&nbsp;and THEATER AND FILM
          INSTITUTE&nbsp;&amp;&nbsp;SCHOOL OF VISUAL ARTS,&nbsp;Ranbir pursued
          film-making and method acting respectively, following which he
          assisted&nbsp;SANJAY&nbsp;LEELA&nbsp;BHANSALI&nbsp;on the
          film&nbsp;BLACK&nbsp;(2005). &nbsp;
          Ranbir&nbsp;Kapoor&nbsp;kick-started his acting debut
          with&nbsp;Bhansali's&nbsp;Tragic-Romance&nbsp;SAAWARIYA&nbsp;(2007), a
          performance&nbsp;so ecstatic that he
          bagged&nbsp;a&nbsp;Filmfare&nbsp;Award for THE BEST MALE DEBUT &nbsp;
          3 hit flicks,&nbsp;namely
          Ajab&nbsp;Prem&nbsp;Ki&nbsp;Ghazab&nbsp;Kahani,&nbsp;Rocket&nbsp;Singh-Salesman&nbsp;Of&nbsp;The&nbsp;Year&nbsp;&amp;&nbsp;Wake&nbsp;Up&nbsp;Sid&nbsp;earned&nbsp;him
          3&nbsp;Filmfare&nbsp;Critics&nbsp;Awards&nbsp;for Best Actor
          Ranbir&nbsp;Kapoor’s award winning spree&nbsp;was extended with 2 BEST
          ACTOR&nbsp;awards at&nbsp;FILMFARE&nbsp;with stellar performances in
          ROCKSTAR&nbsp;(Drama, 2011) and BARFI (Drama-Comedy, 2012), where he
          played a troubled musician and a deaf-mute man respectively &nbsp; He
          further proved his versatile acting skills by engaging the audiences
          in films
          like&nbsp;BOMBAY&nbsp;TALKIES&nbsp;(Appearance),&nbsp;YEH&nbsp;JAWAANI&nbsp;HAI&nbsp;DIWANI&nbsp;(RomanticComedy,2013)
          &amp;&nbsp;RAJNEETI&nbsp;(Drama, 2010) &nbsp; Films aside,
          Kapoor&nbsp;is a stern supporter of charitable causes and initiatives.
          He happens to be the Co-Owner of&nbsp;the&nbsp;INDIAN SUPER
          LEAGUE&nbsp;football team,&nbsp;MUMBAI CITY FC&nbsp;and
          the&nbsp;Co-Founder of &nbsp;Picture&nbsp;Shuru&nbsp;Productions
                    </ContentDiv>
                }

<FlexDiv onClick={()=>setBioactive(!bioactive)}>
                    <div style={{display:"flex",alignItems:"center"}}>
                    <img style={{margin: "0 15px 0 0"}}src='https://stcdn.starclinch.in/mobile/images/profile/biography_icon.svg'/>
                    <div>
                        Biography
                    </div>
                    </div>
                    <button style={bioactive ? {transform:'rotate(180deg)'} : {}}>
                        <img src='./src/Assets/arrow.jpg'/>
                    </button> 
                </FlexDiv>
                {bioactive &&
                    <ContentDiv>
                         Ranbir Kapoor is a Bollywood Superstar.&nbsp;A recipient of several
          accolades including five FILMFARE AWARDS, he is one of the most
          popular and highest paid celebrities in India. He&nbsp;is the grandson
          of well acclaimed Actor-Director Raj Kapoor&nbsp;and the son
          of&nbsp;actors&nbsp;Neetu Kapoor&nbsp;&amp;&nbsp;Rishi Kapoor. At
          the&nbsp;LEE&nbsp;STRASBERG&nbsp;and THEATER AND FILM
          INSTITUTE&nbsp;&amp;&nbsp;SCHOOL OF VISUAL ARTS,&nbsp;Ranbir pursued
          film-making and method acting respectively, following which he
          assisted&nbsp;SANJAY&nbsp;LEELA&nbsp;BHANSALI&nbsp;on the
          film&nbsp;BLACK&nbsp;(2005). &nbsp;
          Ranbir&nbsp;Kapoor&nbsp;kick-started his acting debut
          with&nbsp;Bhansali's&nbsp;Tragic-Romance&nbsp;SAAWARIYA&nbsp;(2007), a
          performance&nbsp;so ecstatic that he
          bagged&nbsp;a&nbsp;Filmfare&nbsp;Award for THE BEST MALE DEBUT &nbsp;
          3 hit flicks,&nbsp;namely
          Ajab&nbsp;Prem&nbsp;Ki&nbsp;Ghazab&nbsp;Kahani,&nbsp;Rocket&nbsp;Singh-Salesman&nbsp;Of&nbsp;The&nbsp;Year&nbsp;&amp;&nbsp;Wake&nbsp;Up&nbsp;Sid&nbsp;earned&nbsp;him
          3&nbsp;Filmfare&nbsp;Critics&nbsp;Awards&nbsp;for Best Actor
          Ranbir&nbsp;Kapoor’s award winning spree&nbsp;was extended with 2 BEST
          ACTOR&nbsp;awards at&nbsp;FILMFARE&nbsp;with stellar performances in
          ROCKSTAR&nbsp;(Drama, 2011) and BARFI (Drama-Comedy, 2012), where he
          played a troubled musician and a deaf-mute man respectively &nbsp; He
          further proved his versatile acting skills by engaging the audiences
          in films
          like&nbsp;BOMBAY&nbsp;TALKIES&nbsp;(Appearance),&nbsp;YEH&nbsp;JAWAANI&nbsp;HAI&nbsp;DIWANI&nbsp;(RomanticComedy,2013)
          &amp;&nbsp;RAJNEETI&nbsp;(Drama, 2010) &nbsp; Films aside,
          Kapoor&nbsp;is a stern supporter of charitable causes and initiatives.
          He happens to be the Co-Owner of&nbsp;the&nbsp;INDIAN SUPER
          LEAGUE&nbsp;football team,&nbsp;MUMBAI CITY FC&nbsp;and
          the&nbsp;Co-Founder of &nbsp;Picture&nbsp;Shuru&nbsp;Productions
                    </ContentDiv>
                }
            </Maindiv>


   
        </>
    )
}

export default MainLandingPage
