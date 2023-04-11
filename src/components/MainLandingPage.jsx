import React, { useState } from 'react'
import "./style.css";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import StarRating from "./StarRating";
import CarouselComponent from './carousel'

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
height:340px;
// padding: 3px 15px 2px 15px;
`;
const InfoDiv = styled.div``;
const Rimg = styled.img`
border-radius: 10px;
box-shadow: 0 3px 10px rgb(0 0 0/0.2);
width: 100%;
height: 100%;
object-fit: cover;
`;
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
// display:flex;
// align-items:center;
// justify-content:space-between;
margin: 40px 0 20px;
padding:1rem;
box-shadow: 0 3px 6px rgba(158,158,158,.16);
// height:60px;
`
const ContentDiv = styled.div`
color: #212529;
 text-align: left;
// display:flex;
// align-items:center;
// justify-content:space-between;
// padding:10px;
height:auto;
line-height:1.5;
font-size:14px;
overflow:hidden;
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
const artist = [
    {
        image: "https://prod-platform-data.s3.ap-south-1.amazonaws.com/s3data/starclinchwpimages/starclinch1/wp-content/uploads/2019/07/godse.jpg" 
    },{
        image: "https://bucketdata.blob.core.windows.net/s3data/starclinchwpimages/starclinch1/wp-content/uploads/2019/02/a11fed94-8b07-412d-879e-f944d29c19a3.jpg"
    },{
        image: "https://bucketdata.blob.core.windows.net/s3data/starclinchwpimages/starclinch1/wp-content/uploads/2019/02/aafreen-vaz-profile.jpg"
    },{
        image: "https://bucketdata.blob.core.windows.net/s3data/starclinchwpimages/starclinch1/wp-content/uploads/2019/02/aartii-nagpal-profile.jpg"
    },{
        image: "https://bucketdata.blob.core.windows.net/s3data/starclinchwpimages/starclinch1/wp-content/uploads/2019/02/aafreen-vaz-profile.jpg"
    },{
        image: "https://bucketdata.blob.core.windows.net/s3data/starclinchwpimages/starclinch1/wp-content/uploads/2019/02/aartii-nagpal-profile.jpg"
    },{
        image: "https://bucketdata.blob.core.windows.net/s3data/starclinchwpimages/starclinch1/wp-content/uploads/2019/02/aashi-sharma-profile.jpg"
    },{
        image: "https://prod-platform-data.s3.ap-south-1.amazonaws.com/s3data/starclinchwpimages/starclinch1/wp-content/uploads/2019/07/Aatish-Bhattacharya2-750x450.jpg"
    }
]
const MainLandingPage = () => {

    const [modal, setModal] = useState(-1);
    const [detail, setDetail] = useState();
    const [bioactive, setBioactive] = useState();
    const [review, setReview] = useState();
    const [language, setLanguage] = useState();
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
                        <div className="App" >
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

                <FlexDiv >
                    <div onClick={() => setBioactive(!bioactive)} style={{ display: "flex", justifyContent: "space-between" }}>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <img style={{ margin: "0 15px 0 0" }} src='https://stcdn.starclinch.in/mobile/images/profile/biography_icon.svg' />
                            <div>
                                Biography
                            </div>
                        </div>
                        <img className='icon' src='down.png'
                            style={bioactive ? { transform: 'rotate(180deg)' } : {}} />
                    </div>
                    <>
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
                    </>
                </FlexDiv>
                <FlexDiv >
                    <div onClick={() => setDetail(!detail)} style={{ display: "flex", justifyContent: "space-between" }}>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <img style={{ margin: "0 15px 0 0" }}
                                src='https://stcdn.starclinch.in/mobile/images/profile/Performance_Details.svg'
                            />
                            <div>
                                Performance Details
                            </div>
                        </div>
                        <img className='icon' src='down.png' style={bioactive ? { transform: 'rotate(180deg)' } : {}} />
                    </div>
                    <>
                        {detail &&
                            <ContentDiv>
                                <div style={{ backgroundColor: "#fff", padding: "14px 15px", borderRadius: "15px" }}>
                                    <div className="MainBox" style={{justifyContent:'space-between'}}>
                                        <div className="Performance">
                                            <div style={{ minHeight: "60px" }}><img src='https://stcdn.starclinch.in/mobile/images/profile/offstage_members_new.svg' /></div>
                                            <div>
                                                <b>
                                                    <h3 style={{ fontSize: "22px", color: "#26c6da", margin: "0 0 3px" }}>4</h3>
                                                    <p style={{ paddingBottom: "5%", color: "#26c6da", fontWeight: "300", margin: "0", fontSize: "16px" }}>Off Stage Members</p>
                                                </b>
                                            </div>
                                        </div>


                                        <div className="Performing">
                                            <div style={{ minHeight: "60px" }}><img src='https://stcdn.starclinch.in/mobile/images/profile/performing_members_new.svg' /></div>
                                            <h3 style={{ color: "#F36", margin: "0 0 3px" }}>1</h3>
                                            <p style={{ paddingBottom: "5%", color: "#F36", fontWeight: "300", margin: "0", fontSize: "16px" }}>Performing Members</p>
                                        </div>


                                        <div className="Duration" >
                                            <div style={{ minHeight: "60px" }}><img src='https://stcdn.starclinch.in/mobile/images/profile/performance_min_duration_new.svg' /></div>
                                            <h3 style={{ color: "#be63f9", margin: "0 0 3px" }}>60 - 120 Min</h3>
                                            <p style={{ paddingBottom: "5%", color: "#be63f9", fontWeight: "300", margin: "0", fontSize: "16px" }}>Performance Duration</p>
                                        </div>


                                        <div className="Travel">
                                            <div style={{ minHeight: "60px" }}><img src='https://stcdn.starclinch.in/mobile/images/profile/can_travel_new.svg' /></div>
                                            <div style={{ color: "#ffb148", margin: "0 0 3px" }}>Can Travel</div>
                                            <div style={{ paddingBottom: "5%", color: "#ffb148", fontWeight: "300", margin: "0", fontSize: "16px" }}>Nationwide</div>
                                        </div>
                                    </div>
                                </div>
                            </ContentDiv>
                        }
                    </>
                </FlexDiv>
                <FlexDiv>
                    <div onClick={() => setLanguage(!language)}  style={{ display: "flex", justifyContent: "space-between" }}>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <img style={{ margin: "0 15px 0 0" }} src='https://stcdn.starclinch.in/mobile/images/profile/performance_language_v2.svg' />
                            <div>
                                Performance Language
                            </div>
                        </div>
                        <img className='icon' src='down.png' style={bioactive ? { transform: 'rotate(180deg)' } : {}} />
                    </div>
                    <>
                        {language &&
                            <ContentDiv>
                                <div style={{ backgroundColor: "#fff", padding: "14px 15px", display: "flex" }}>
                                    <div className="MainBox" style={{width: '100%'}} >
                                        <div className='ImgTop'>
                                            <div className='LangImg'><img style={{ width: "100%" }} src='https://starclinch.com/static/mobile/images/language_icons/English.svg' /></div>
                                            <p className='Subject'>English</p>
                                        </div>
                                        <div className='ImgTop'>
                                            <div className='LangImg'><img style={{ width: "100%" }} src='https://starclinch.com/static/mobile/images/language_icons/Hindi.svg' /></div>
                                            <p className='Subject'>Hindi</p>
                                        </div>
                                    </div>
                                </div>
                            </ContentDiv>
                        }
                    </>
                </FlexDiv>
                <FlexDiv >
                    <div onClick={() => setReview(!review)} style={{ display: "flex", justifyContent: "space-between" }}>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <img style={{ margin: "0 15px 0 0", width: "32px", height: "32px" }} src='https://starclinch.com/static/mobile/images/profile/review_icon.svg' />
                            <div>
                                Review
                            </div>
                        </div>
                        <img className='icon' src='down.png' style={bioactive ? { transform: 'rotate(180deg)' } : {}} />
                    </div>
                    <>
                        {review &&
                            <ContentDiv>
                                <div style={{ backgroundColor: "#fff", padding: "14px 15px", display: "flex" }}>
                                    <div style={{ height: "auto", padding: "20px 15px",    width: '100%' }}>
                                        <div style={{ display: "flex", flexWrap: "wrap", marginRight: "-15px", marginLeft: "-15px", width: "100%" }}>
                                            <div style={{ width: "90%" }}>
                                                <div style={{ textAlign: "center", margin: "0 0 40px" }}>
                                                    <h5 style={{ color: "#191818", fontSize: "22px", margin: "0" }}>0 reviews</h5>
                                                </div>
                                                <div>
                                                    <h3 style={{ fontSize: "30px", fontWeight: "400", lineHeight: "1.2", color: "#000", margin: "0 0 20px" }}>
                                                        Post a review
                                                    </h3>
                                                    <div>
                                                        <StarRating />
                                                    </div>
                                                </div>
                                                <div style={{marginBottom:"1rem",marginTop:"1rem"}}>
                                                       <textarea className='MainText'></textarea>
                                                </div>
                                                <div style={{textAlign:"right"}}>
                                                    <input className="post"style={{}}Type="button" value="POST"></input>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </ContentDiv>
                        }
                    </>
                </FlexDiv>
                <div style={{ margin: "50px 0 0" }}>
                    <div style={{ display: "flex", alignItems: "center", margin: "0 0 30px" }}>
                        <div style={{ margin: "0 15px 0 0" }}><img src='https://stcdn.starclinch.in/mobile/images/profile/similar_artist_icon_v2.svg' /></div>
                        <h4 style={{ fontWeight: "500", fontSize: "20px" }}> Similar Artists you may like</h4>
                    </div>
                </div>

                <div style={{ margin: "50px 0 0" }}>
                    <div>You might be interested in</div>
                    <CarouselComponent data={artist}/>
                </div>
            </Maindiv>



        </>
    )
}

export default MainLandingPage
