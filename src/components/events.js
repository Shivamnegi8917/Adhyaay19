import React, { Fragment } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import history from "./history";
import axios from "axios";
import { Alert } from "reactstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import ComingSoon from "../images/commingSoon.jpeg";

import TennisFootbal from "../images/adhyaay/Tennis-football.jpg";
import KhoKho from "../images/adhyaay/kho-kho.jpg";
import GullyCricket from "../images/adhyaay/GULLY-CRICKET.jpg";

import BattleRap from "../images/cultural/battlerap.jpg";
import Comique from "../images/cultural/comique.png";
import DefilDeModa from "../images/cultural/defiledemoda.jpg";
import GroupDance from "../images/cultural/groupdance.png";
import HbtuGotTalent from "../images/cultural/hbtugottalent.jpg";
import OpenMic from "../images/cultural/openmic.jpg";
import Sargam from "../images/cultural/sargam.png";
import SumoWrestling from "../images/cultural/sumowrestling.jpg";
import MinuteToWinIt from "../images/adhyaay/MinuteToWinIt.png";

import MrMsLit from "../images/lit/mrmslit.jpg";
import ItsQuizTime from "../images/lit/itsquiz.jpg";
import Kavyamay from "../images/lit/Kavyamay.jpg";
import LetsFightThisStigmaTogether from "../images/lit/letsfightthisstigmatogether.jpg";
import PosterPresentation from "../images/lit/posterPresentation.jpg";
import PotentialProfessor from "../images/lit/potentialProfessor.jpg";
import SituationReaction from "../images/lit/situationReaction.jpg";
import TurnCoat from "../images/lit/turncoat.jpg";

class Events extends React.Component {
  state = {
    activatedItemHeader: "",
    activatedItemContent: "",
    activatedItemImg: "",
    activatedItemsCoordinators: [],
    activatedItemVenue: "",
    activatedItemAudition: "",
    activatedItemMainEvent: "",
    message: ""
  };

  componentDidMount() {
    M.AutoInit();
    const options = {
      inDuration: 250,
      outDuration: 250,
      opacity: 0.5,
      dismissible: false,
      startingTop: "4%",
      endingTop: "10%"
    };
    M.Modal.init(this.Modal, options);
  }

  onCancelClick = () => {
    this.setState({
      activatedItemHeader: "",
      activatedItemContent: "",
      activatedItemImg: "",
      activatedItemsCoordinators: [],
      activatedItemVenue: "",
      activatedItemAudition: "",
      activatedItemMainEvent: "",
      message: ""
    });
  };

  onRegisterClick = () => {
    const { isAuthenticated, user } = this.props;

    if (!isAuthenticated) {
      this.onCancelClick();
      history.push("/login");
    } else {
      const self = this;
      axios
        .post("https://gentle-dusk-33875.herokuapp.com/api/event/register", {
          email: user.email,
          event: this.state.activatedItemHeader,
          mainevent: this.state.activatedItemMainEvent,
          name: user.name
        })
        .then(function(res) {
          self.setState({
            message: res.data.message
          });
        })
        .catch(function(err) {
          console.log(err);
        });
    }
  };

  onClickTennisFootball = () => {
    this.setState({
      activatedItemContent:
        "Simple football with a little twist in the rules to make it a much entertaining and a gully event. Come in a team of four. The teams to win will proceed to the next round. (3 Boys+1 Girl)",
      activatedItemHeader: "Tennis-Footbal",
      activatedItemImg: TennisFootbal,
      activatedItemsCoordinators: [
        {
          name: "Divyansh Tripathi",
          phone: "8299848712"
        },
        {
          name: "Milind Kaushal",
          phone: "9582053354"
        },
        {
          name: "Shiv Tomar",
          phone: "9675798707"
        }
      ],
      activatedItemVenue: "BE/FT Lawn",
      activatedItemMainEvent: "Adhyaay"
    });
  };

  onClickKhoKho = () => {
    this.setState({
      activatedItemContent:
        "Ever played Kho-Kho before? Make your team and come to play the most adrenaline filled game.",
      activatedItemHeader: "KHO-KHO",
      activatedItemImg: KhoKho,
      activatedItemsCoordinators: [
        {
          name: "Krishnam Dhawan",
          phone: "7379739956"
        },
        {
          name: "Ritika Maurya",
          phone: "7408115660"
        },
        {
          name: "Archit Garg",
          phone: "9452396775"
        }
      ],
      activatedItemVenue: "BE/FT Lawn",
      activatedItemMainEvent: "Adhyaay"
    });
  };

  onClickGUllyCricket = () => {
    this.setState({
      activatedItemContent:
        "Simple cricket with a little twist in the rules to make it a much entertaining and a gully event. Come in a team of four. The teams to win will proceed to the next round. (3 Boys+1 Girl)",
      activatedItemHeader: "Gully Cricket",
      activatedItemImg: GullyCricket,
      activatedItemsCoordinators: [
        {
          name: "Deepak Yadav",
          phone: "8299708935"
        },
        {
          name: "Pranjal Shukla",
          phone: "8696458611"
        },
        {
          name: "Rohit",
          phone: "9354717504"
        },
        {
          name: "Ritika Maurya",
          phone: "Ritika Maurya"
        }
      ],
      activatedItemVenue: "BE/FT Lawn",
      activatedItemMainEvent: "Adhyaay"
    });
  };

  onClickTrivia = () => {
    this.setState({
      activatedItemContent:
        "Come and show your knowledge in fields of movies, sports, science, TV series and much more. It will be a quiz competition with more fun and twists and tasks",
      activatedItemHeader: "Trivia",
      activatedItemImg: ComingSoon,
      activatedItemsCoordinators: [
        {
          name: "Abhinav Mehrotra",
          phone: "9682465510"
        },
        {
          name: "Samyak Srivastava",
          phone: "08004001517"
        }
      ],
      activatedItemVenue: "Infront of Main Building",
      activatedItemMainEvent: "Adhyaay"
    });
  };

  onClickSackRace = () => {
    this.setState({
      activatedItemContent:
        "It is a fun event in which participants need to race with other opponents but with the legs inside a sack. The first one to cross the finish line wins",
      activatedItemHeader: "Sack Race",
      activatedItemImg: ComingSoon,
      activatedItemsCoordinators: [
        {
          name: "Richa Singh",
          phone: "8318538099"
        },
        {
          name: "Upaggya Dixit",
          phone: "9935685535"
        },
        {
          name: "Priyanshi Omer",
          phone: "9616201717"
        }
      ],
      activatedItemVenue: "BE/FT Lawn",
      activatedItemMainEvent: "Adhyaay"
    });
  };

  onClickThreeLeggedRace = () => {
    this.setState({
      activatedItemContent:
        "Presenting you the race on three legs. Yes ever imagined two persons with three legs, each participant’s (team of 2) one leg is tied together and they need to race with other opponents to cross the finish line.",
      activatedItemHeader: "Three Legged Race",
      activatedItemImg: ComingSoon,
      activatedItemsCoordinators: [
        {
          name: "Avantika Singh Parihar",
          phone: "7376851380"
        },
        {
          name: "Ayush Panday",
          phone: "6388872090"
        },
        {
          name: "Akshay",
          phone: "6387690292"
        }
      ],
      activatedItemVenue: "BE/FT Lawn",
      activatedItemMainEvent: "Adhyaay"
    });
  };

  onClickLemonSpoonRace = () => {
    this.setState({
      activatedItemContent:
        "Presenting you the one of the interested events of the day. Participants will be provided a spoon and a lemon and they need to race with each other balancing the lemon on spoon and spoon being hold in the mouth.",
      activatedItemHeader: "Lemon Spoon Race",
      activatedItemImg: ComingSoon,
      activatedItemsCoordinators: [
        {
          name: "Ritu Singh ",
          phone: "8400193611"
        },
        {
          name: "Muskaan Dubey",
          phone: "9129176677"
        },
        {
          name: "Shiksha Dwivedi",
          phone: "6388543320"
        }
      ],
      activatedItemVenue: "BE/FT Lawn",
      activatedItemMainEvent: "Adhyaay"
    });
  };

  onClickFrogRace = () => {
    this.setState({
      activatedItemContent:
        "Participants need to jump like a frog and reach the finishing line",
      activatedItemHeader: "Frog Race",
      activatedItemImg: ComingSoon,
      activatedItemsCoordinators: [
        {
          name: "Manya Pandey ",
          phone: "6393227629"
        },
        {
          name: "Anurag Yadav",
          phone: "9456447767"
        },
        {
          name: "Shashwat",
          phone: "7390809099"
        }
      ],
      activatedItemVenue: "BE/FT Lawn",
      activatedItemMainEvent: "Adhyaay"
    });
  };

  onClickBegBorrowOrSteal = () => {
    this.setState({
      activatedItemContent:
        "Participants (team of 4) will be provided with a list of some objects which they need to collect in a given time slot. The team who reaches first with the maximum no. of items will win the game",
      activatedItemHeader: "Beg Borrow Or Steal",
      activatedItemImg: ComingSoon,
      activatedItemsCoordinators: [
        {
          name: "Krati Bharti",
          phone: "9559800788"
        },
        {
          name: "Stuti Saini",
          phone: "6398113419"
        },
        {
          name: "Jaya Tomar",
          phone: "9760334951"
        }
      ],
      activatedItemVenue: "BE/FT Lawn",
      activatedItemMainEvent: "Adhyaay"
    });
  };

  onClickMusicalChairs = () => {
    this.setState({
      activatedItemContent:
        "A simple fun event where some chairs will be kept and music will be played, when the music stops the participants will have to be seated on the chairs and one will be left out and knocked out. One chair is removed after every round. And the person who survives till last wins",
      activatedItemHeader: "Musical Chairs",
      activatedItemImg: ComingSoon,
      activatedItemsCoordinators: [
        {
          name: "Satyam Kumar",
          phone: "9984103106"
        },
        {
          name: "Saumya Chaudhary",
          phone: "7905235485"
        },
        {
          name: "Aakriti Kaithwas",
          phone: "7571039324"
        }
      ],
      activatedItemVenue: "Canteen",
      activatedItemMainEvent: "Adhyaay"
    });
  };

  onClickSurvivalWar = () => {
    this.setState({
      activatedItemContent:
        "It is the most awaited fun event of the day. Participants (team of 2) need to carry their partner on their back and eliminate the other teams without using hands or legs. The area will be limited and you know the rule the last team standing wins the event. Better plant your feet and try not to fall.",
      activatedItemHeader: "Survival War",
      activatedItemImg: ComingSoon,
      activatedItemsCoordinators: [
        {
          name: "Saumya Rastogi",
          phone: "8449914053"
        },
        {
          name: "Ria Agrawal",
          phone: "9839953770"
        },
        {
          name: "Satyarth",
          phone: "7071200246"
        }
      ],
      activatedItemVenue: "BE/FT Lawn",
      activatedItemMainEvent: "Adhyaay"
    });
  };

  onClickMurderMystery = () => {
    this.setState({
      activatedItemContent:
        "An event which shows your investigation skills along with the presence of mind. Participants(team of 4) will be provided with clues and hints to solve a crime or murder mystery and find the weapon used. The team to solve the mystery in minimum time duration lifts the title.",
      activatedItemHeader: "Murder Mystery",
      activatedItemImg: ComingSoon,
      activatedItemsCoordinators: [
        {
          name: "Aayush Gupta",
          phone: "9599492231"
        },
        {
          name: "Abhishek Chaudhary",
          phone: "7302182930"
        },
        {
          name: "Akashdeep",
          phone: "9354054362"
        }
      ],
      activatedItemVenue: "Infront of Main Building",
      activatedItemMainEvent: "Adhyaay"
    });
  };

  onClickDumLagaKeHaisa = () => {
    this.setState({
      activatedItemContent:
        "Participants (team of 6) are provided with a rope with a line of reference. The team who drags the opposite team in their area wins and proceeds further for the final round. Don't forget to plant your feet and pull until your last breath.",
      activatedItemHeader: "DUM LAGA KE HAISA (Tug of War)",
      activatedItemImg: ComingSoon,
      activatedItemsCoordinators: [
        {
          name: "Amaan Anjum ",
          phone: "9473904707"
        },
        {
          name: "Vaishnavi Sachan ",
          phone: "6307097848"
        },
        {
          name: "Aagman Dwivedi",
          phone: "7266832256"
        }
      ],
      activatedItemVenue: "BE/FT Lawn",
      activatedItemMainEvent: "Adhyaay"
    });
  };

  onClickPubg = () => {
    this.setState({
      activatedItemContent:
        "Come and show your talents in gaming if that’s what you are fond of. Beat your opponent in your particular game of interest and finally the title is all yours",
      activatedItemHeader: "Pubg",
      activatedItemImg: ComingSoon,
      activatedItemsCoordinators: [
        {
          name: "Parth Shukla",
          phone: "7408938703"
        },
        {
          name: "Harsh Verma",
          phone: "6386182610"
        },
        {
          name: "Deepak Yadav",
          phone: "8127926008"
        }
      ],
      activatedItemVenue: "Civil Department",
      activatedItemMainEvent: "Adhyaay"
    });
  };

  onClickDashRace = () => {
    this.setState({
      activatedItemContent:
        "It is a multi-tasking event race. It consists of various stages which includes various fun and awesome tasks to complete the race. It will be one of the most awaited events of the day.",
      activatedItemHeader: "Dash Race",
      activatedItemImg: ComingSoon,
      activatedItemsCoordinators: [
        {
          name: "Harshvardhan",
          phone: "7830080357"
        },
        {
          name: "Avantika Singh Parihar",
          phone: "7376851380"
        },
        {
          name: "Nikita Devi",
          phone: "9810809853"
        }
      ],
      activatedItemVenue: "BE/FT Lawn",
      activatedItemMainEvent: "Adhyaay"
    });
  };

  onClickLivingOnTheEdge = () => {
    this.setState({
      activatedItemContent:
        "An event which tests your all-round strength in every field. It includes task doing capability, your emotional and external strength, intelligence and knowledge. Participants are allowed to participate in solo and need to clear all the stages to proceed further.",
      activatedItemHeader: "Living On the Edge",
      activatedItemImg: ComingSoon,
      activatedItemsCoordinators: [
        {
          name: "Kajal Sahu",
          phone: "7733991675"
        },
        {
          name: "Amaan Anjum ",
          phone: "9473904707"
        }
      ],
      activatedItemVenue: "BE/FT Lawn",
      activatedItemMainEvent: "Adhyaay"
    });
  };

  onClickExpresso = () => {
    this.setState({
      activatedItemContent:
        "It is an event which amplifies and tests your marketing skills. Participants (team of 4) will be provided with a product which they need to sell to the given list of persons provided. The team with the most selling points wins.",
      activatedItemHeader: "Expresso",
      activatedItemImg: ComingSoon,
      activatedItemsCoordinators: [
        {
          name: "Deeksha Lala",
          phone: "8935031035"
        },
        {
          name: "Ritika Maurya",
          phone: "7408115660"
        },
        {
          name: "Parvika Gupta",
          phone: "9045421736"
        },
        {
          name: "Krati Bharti",
          phone: "9559800788"
        }
      ],
      activatedItemVenue: "Infront of Main Building",
      activatedItemMainEvent: "Adhyaay"
    });
  };

  onClickPehchaanKaun = () => {
    this.setState({
      activatedItemContent:
        "Each participant will be given a set of instructions regarding a particular Harcourtian. Using the clues he/she has to find that Harcourtian and get a selfie. Better Luck!!! ",
      activatedItemHeader: "Pehchaan Kuan",
      activatedItemImg: ComingSoon,
      activatedItemsCoordinators: [
        {
          name: "Yashvi Jain",
          phone: "8004164516"
        },
        {
          name: "Saransh Bhardwaj",
          phone: "8840493395"
        },
        {
          name: "Deeksha Lala",
          phone: "8935031035"
        }
      ],
      activatedItemVenue: "Infront of Main Building",
      activatedItemMainEvent: "Adhyaay"
    });
  };

  onClickFacePainting = () => {
    this.setState({
      activatedItemContent:
        "Team consists of two members in which one will paint on the face of the other. Show your creativity that flows through your veins and brushes ",
      activatedItemHeader: "Face Painting",
      activatedItemImg: ComingSoon,
      activatedItemsCoordinators: [
        {
          name: "Stuti Saini",
          phone: "6398113411"
        },
        {
          name: "Parvika Gupta",
          phone: "9045421736"
        }
      ],
      activatedItemVenue: "Infront of Main Building",
      activatedItemMainEvent: "Adhyaay"
    });
  };

  onClickMinuteToWinIt = () => {
    this.setState({
      activatedItemContent:
        "Bunch of fun games with the sole purpose of entertainment will be organized for the students. So it’s just a minute to win it. ",
      activatedItemHeader: "Minute To Win It",
      activatedItemImg: ComingSoon,
      activatedItemVenue: "Infront of Main Building",
      activatedItemMainEvent: "Adhyaay"
    });
  };

  onClickBattleRap = () => {
    this.setState({
      activatedItemContent:
        "This is the clash of hearts, the war of bragging, the fight of serenity, the conflicts of words. HBTU is organising Rap Battle and Beat Boxing for all those vocal artists out there. Unveil the best mix of music and lyrics in you and fight this war to prove yourself.",
      activatedItemHeader: "Bataille-de-rap(Rap Battle)",
      activatedItemImg: BattleRap,
      activatedItemVenue: "Auditorium",
      activatedItemMainEvent: "Cultural",
      activatedItemsCoordinators: [
        {
          name: "Ayushi Seth",
          phone: "7014797937"
        },
        {
          name: "Siddhi Sharma",
          phone: "9870698949"
        },
        {
          name: "Rishab Shukla",
          phone: "8787236589"
        }
      ]
    });
  };

  onClickComique = () => {
    this.setState({
      activatedItemContent:
        "Stand-Up Comedy is a comic style in which a comedian will be performing in front of live audience, usually speaking directly to them.",
      activatedItemHeader: "Comique(Stand-Up Comedy)",
      activatedItemImg: Comique,
      activatedItemVenue: "Auditorium",
      activatedItemAudition: "4th November, 2019",
      activatedItemMainEvent: "Cultural",
      activatedItemsCoordinators: [
        {
          name: "Adishree",
          phone: "9598644255"
        },
        {
          name: "Priyanshu",
          phone: "8756645595"
        },
        {
          name: "Kanchan",
          phone: "8299740931"
        }
      ]
    });
  };

  onClickDefilDeModa = () => {
    this.setState({
      activatedItemContent:
        "Fashion is a way to speak who you are without having to speak. With the adage”Classy and Fabulous”on back of your minds, we have this event planned out to cater to the fashionista in all of us.Gorgeous females sizzle the ramp with their display of sensational apparels, radiating confidence and mystique and sculpted males. ",
      activatedItemHeader: "Defile-de-moda(Theme based choreography)",
      activatedItemImg: DefilDeModa,
      activatedItemVenue: "Auditorium",
      activatedItemAudition: "4th November, 2019",
      activatedItemMainEvent: "Cultural",
      activatedItemsCoordinators: [
        {
          name: "Disha",
          phone: "8707054840"
        }
      ]
    });
  };

  onClickGroupDance = () => {
    this.setState({
      activatedItemContent:
        "Dancers are instruments, like a piano, the choreographer plays. So, come prepared with your groups to make an everlasting impression on the audience in the cultural night ",
      activatedItemHeader: "Danse de groupe (Group dance competition)  ",
      activatedItemImg: GroupDance,
      activatedItemVenue: "Auditorium",
      activatedItemAudition: "4th November, 2019",
      activatedItemMainEvent: "Cultural",
      activatedItemsCoordinators: [
        {
          name: "Pranav Tyagi",
          phone: "9540957752"
        },
        {
          name: "Nikita Chaudhary",
          phone: "9412226665"
        },
        {
          name: "Rikki Chauhan",
          phone: "7985924803"
        }
      ]
    });
  };

  onClickHbtuGotTalent = () => {
    this.setState({
      activatedItemContent:
        "A singer? A dancer? Love mimicking? A poet? We appreciate every form of talent. So come and show us what you've got! The best talent gets to win exciting goodies! Gear up and smash the stage with that talent ",
      activatedItemHeader: "HBTU's Got Talent ",
      activatedItemImg: HbtuGotTalent,
      activatedItemMainEvent: "Cultural",
      activatedItemsCoordinators: [
        {
          name: "Rishabh Shukla",
          phone: "8787236589"
        },
        {
          name: "Nikita Singh",
          phone: "8318721284"
        }
      ]
    });
  };

  onClickDanceFaceOff = () => {
    this.setState({
      activatedItemContent:
        "Dance like no one is watching. Dance to random songs and compete with others. Let's see who has got the best instant moves ",
      activatedItemHeader: "Dance Face Off ",
      activatedItemImg: ComingSoon,
      activatedItemMainEvent: "Cultural",
      activatedItemsCoordinators: [
        {
          name: "Pranav Tyagi",
          phone: "9540957752"
        },
        {
          name: "Nikita Chaudhary",
          phone: "9412226665"
        },
        {
          name: "Rikki Chauhan",
          phone: "7985924803"
        }
      ]
    });
  };

  onClickDanceSolo = () => {
    this.setState({
      activatedItemContent:
        "A dancer is always on point. Compete with others by setting the stage on fire. Dance your heart out, to the beat of your dreams on the cultural night ",
      activatedItemHeader: "Dance Solo ",
      activatedItemImg: ComingSoon,
      activatedItemMainEvent: "Cultural",
      activatedItemsCoordinators: [
        {
          name: "Pranav Tyagi",
          phone: "9540957752"
        },
        {
          name: "Nikita Chaudhary",
          phone: "9412226665"
        },
        {
          name: "Rikki Chauhan",
          phone: "7985924803"
        }
      ]
    });
  };

  onClickVogue = () => {
    this.setState({
      activatedItemContent:
        "No registrations required, if you're present at the campus during Adhyaay, you're a participant. You'll be judged on the basis of your outfit, personality and the way you carry yourself.  The winners shall be announced on Instagram  and will be awarded with exciting goodies. So prep up yourself for the three-day event where you can be observed at any time",
      activatedItemHeader: "Vogue",
      activatedItemImg: ComingSoon,
      activatedItemMainEvent: "Cultural"
    });
  };

  onClickDressToImpress = () => {
    this.setState({
      activatedItemContent:
        "Do you think you have a designer in you? It's time to wake up the Manish Malhotra in you and stun everyone else. With your creativity in action, make a dress out of some papers provided to you on spot. You can have the stage to yourself or can have an army of maximum three designers (including you). There'll be a nominal entry fee and assured grand prizes for our winner!",
      activatedItemHeader: "Dress to Impress",
      activatedItemImg: ComingSoon,
      activatedItemMainEvent: "Cultural",
      activatedItemsCoordinators: [
        {
          name: "Sanjeev",
          phone: "9149512788"
        }
      ]
    });
  };

  onClickOpenMic = () => {
    this.setState({
      activatedItemContent:
        "Open mic is an event where anyone can grab the mic and perform. The performer is handed the mic to perform live on the stage in front of the audience. The event is focussed on performance arts like poetry, song, stand-up comedy etc. ",
      activatedItemHeader: "Open Mic ",
      activatedItemImg: OpenMic,
      activatedItemMainEvent: "Cultural",
      activatedItemsCoordinators: [
        {
          name: "Adishree",
          phone: "9598644255"
        },
        {
          name: "Priyanshu",
          phone: "8756645595"
        },
        {
          name: "Kanchan",
          phone: "8299740931"
        }
      ]
    });
  };

  onClickSargam = () => {
    this.setState({
      activatedItemContent:
        "Billy Joel says-“I think music in itself is healing. It’s an explosive expression of humanity. It’s something we are all touched by. No matter what culture we’re from, everyone loves music.” Here’s an opportunity to get on stage and tell you story through your singing . It’s a singing contest. If you believe in yourself then come compete with the elite. You can sing and play an instrument. Just be your best self and the own the stage ",
      activatedItemHeader: "Sargam ",
      activatedItemImg: Sargam,
      activatedItemAudition: "4th November, 2019.",
      activatedItemVenue: "Auditorium",
      activatedItemMainEvent: "Cultural",
      activatedItemsCoordinators: [
        {
          name: "Ashtha Gaur",
          phone: "8318283637"
        },
        {
          name: "Divyank",
          phone: "8953598218"
        }
      ]
    });
  };

  onClickSumoWrestling = () => {
    this.setState({
      activatedItemContent:
        "This is the game of technique and power.Two persons dressed with an enormous thong pushing each other inside a small ring “dohyo” . And by making your opponent touch the ground with any part of the body other than soles of feet or forcing him out of sumo ring you will become champion ",
      activatedItemHeader: "Sumo Wrestling ",
      activatedItemImg: SumoWrestling,
      activatedItemMainEvent: "Cultural",
      activatedItemsCoordinators: [
        {
          name: "Nikita Singh",
          phone: "9554957217"
        },
        {
          name: "Anchi Rai",
          phone: "8004523955"
        },
        {
          name: "Ayushi Seth",
          phone: "7014797937"
        },
        {
          name: "Siddhi Sharma",
          phone: "9870698949"
        }
      ]
    });
  };

  onClickMrMsLit = () => {
    this.setState({
      activatedItemContent:"Literary and quintessential personality quest ",
      activatedItemHeader: "MS. & MR. LITERATI  ",
      activatedItemImg: MrMsLit,
      activatedItemMainEvent: "Litrary",
      activatedItemsCoordinators: [
        {
          name: "Contact:",
          phone: "123456789"
        },
        {
          name: "Contact",
          phone: "123456789"
        },
        {
          name: "Contact",
          phone: "123456789"
        }
      ],
      activatedItemVenue: "Civil seminar hall"
    });
  };

  onClickBangTheBench = () => {
    this.setState({
      activatedItemContent:"Event to exhibit your spunky and spontaneous take on the topic and to prove your mettle against your opponent on the given topic",
      activatedItemHeader: "Bang The Bench",
      activatedItemImg: ComingSoon,
      activatedItemMainEvent: "Litrary",
      activatedItemsCoordinators: [
        {
          name: "Contact:",
          phone: "123456789"
        },
        {
          name: "Contact",
          phone: "123456789"
        },
        {
          name: "Contact",
          phone: "123456789"
        }
      ],
      activatedItemVenue: "Civil seminar hall"
    });
  };

  onClickJam = () => {
    this.setState({
      activatedItemContent:"Can you speak without hesitation, repetition ,deviation ,fumbling and grammatical error straight for 60 seconds? If yes! Then lets JAM.",
      activatedItemHeader: "JAM",
      activatedItemImg: ComingSoon,
      activatedItemMainEvent: "Litrary",
      activatedItemsCoordinators: [
        {
          name: "Contact:",
          phone: "123456789"
        },
        {
          name: "Contact",
          phone: "123456789"
        },
        {
          name: "Contact",
          phone: "123456789"
        }
      ],
      activatedItemVenue: "Auditorium"
    });
  };

  onClickPotentialProfessor = () => {
    this.setState({
      activatedItemContent:"Ever thought that the lectures you attend can be any more interactive? The competition to judge your creative communication skills on board with chalk and duster is corner around. Choose any topic under the sky from politics to religion or technology to astrology and let the professor inside you get recognized.",
      activatedItemHeader: "Potential Professor",
      activatedItemImg: PotentialProfessor,
      activatedItemMainEvent: "Litrary",
      activatedItemsCoordinators: [
        {
          name: "Contact:",
          phone: "123456789"
        },
        {
          name: "Contact",
          phone: "123456789"
        },
        {
          name: "Contact",
          phone: "123456789"
        }
      ],
      activatedItemVenue: "G- Series"
    });
  };

  onClickJingling = () => {
    this.setState({
      activatedItemContent:"Might not you be the fan of Mentos ,Vicco  or Nirma but you have grown up singing their melodies .Got the guts to challenge them? Come and then Jingle up and exhibit the marketing maniac inside you.",
      activatedItemHeader: "Jingling",
      activatedItemImg: ComingSoon,
      activatedItemMainEvent: "Litrary",
      activatedItemsCoordinators: [
        {
          name: "Contact:",
          phone: "123456789"
        },
        {
          name: "Contact",
          phone: "123456789"
        },
        {
          name: "Contact",
          phone: "123456789"
        }
      ]
    });
  };

  onClickQuizzes = () => {
    this.setState({
      activatedItemContent:"When we go quizzing, we go in style, we set out the facts, play fair and avoid the ambiguity",
      activatedItemHeader: "QUIZZES (HINDI, ENGLISH, COMIC, WEB&T.V. SERIES, BUSINESS)",
      activatedItemImg: ItsQuizTime,
      activatedItemMainEvent: "Litrary",
      activatedItemsCoordinators: [
        {
          name: "Contact:",
          phone: "123456789"
        },
        {
          name: "Contact",
          phone: "123456789"
        },
        {
          name: "Contact",
          phone: "123456789"
        }
      ]
    });
  };

  onClickPoetryPinnacle = () => {
    this.setState({
      activatedItemContent:"Bring your self- composed English composition and spread the fragrance of your words beyond the limits of firmament",
      activatedItemHeader: "POESY PINNACLE:Slam Poetry",
      activatedItemImg: ComingSoon,
      activatedItemMainEvent: "Litrary",
      activatedItemsCoordinators: [
        {
          name: "Contact:",
          phone: "123456789"
        },
        {
          name: "Contact",
          phone: "123456789"
        },
        {
          name: "Contact",
          phone: "123456789"
        }
      ],
      activatedItemVenue: "Auditorium"
    });
  };

  onClickBakhan = () => {
    this.setState({
      activatedItemContent:"We are nothing but an amalgamation of short stories. Each day we live,we write a story",
      activatedItemHeader: " Bakhan",
      activatedItemImg: ComingSoon,
      activatedItemMainEvent: "Litrary",
      activatedItemsCoordinators: [
        {
          name: "Contact:",
          phone: "123456789"
        },
        {
          name: "Contact",
          phone: "123456789"
        },
        {
          name: "Contact",
          phone: "123456789"
        }
      ],
      activatedItemVenue: "G-series"
    });
  };

  onClickChitrVichitr = () => {
    this.setState({
      activatedItemContent:": Participants will be given a picture and they will have to write story or any poem about what they think the picture depicts.",
      activatedItemHeader: "ChitrVichitr",
      activatedItemImg: ComingSoon,
      activatedItemMainEvent: "Litrary",
      activatedItemsCoordinators: [
        {
          name: "Contact:",
          phone: "123456789"
        },
        {
          name: "Contact",
          phone: "123456789"
        },
        {
          name: "Contact",
          phone: "123456789"
        }
      ],
      activatedItemVenue: "FT Seminar Hall"
    });
  };

  onClickHumaraNetaKaisaHo = () => {
    this.setState({
      activatedItemContent:": Participants will choose a leader of their choice and Give a speech(HINDI & ENGLISH)",
      activatedItemHeader: "Humara Neta Kaisa Ho",
      activatedItemImg: ComingSoon,
      activatedItemMainEvent: "Litrary",
      activatedItemsCoordinators: [
        {
          name: "Contact:",
          phone: "123456789"
        },
        {
          name: "Contact",
          phone: "123456789"
        },
        {
          name: "Contact",
          phone: "123456789"
        }
      ],
      activatedItemVenue: "BE Seminar Hall "
    });
  };
  
  onClickNaziWolf = () => {
    this.setState({
      activatedItemContent:"THINK YOU ARE THE BIGGEST GRAMMAR NAZI GANGSTA IN THE TOWN? You will be provided with content, you’ll have to spot the errors and correct them.",
      activatedItemHeader: "Nazi Wolf",
      activatedItemImg: ComingSoon,
      activatedItemMainEvent: "Litrary",
      activatedItemsCoordinators: [
        {
          name: "Contact:",
          phone: "123456789"
        },
        {
          name: "Contact",
          phone: "123456789"
        },
        {
          name: "Contact",
          phone: "123456789"
        }
      ]
    });
  };

  onClickPosterPresentation = () => {
    this.setState({
      activatedItemContent:"The speed of light is faster than sound and thus eyes understand what ears can’t. Make a poster and speak your heart out on a given topic and let your words and strokes boom together",
      activatedItemHeader: "Poster Presentation",
      activatedItemImg: PosterPresentation,
      activatedItemMainEvent: "Litrary",
      activatedItemsCoordinators: [
        {
          name: "Contact:",
          phone: "123456789"
        },
        {
          name: "Contact",
          phone: "123456789"
        },
        {
          name: "Contact",
          phone: "123456789"
        }
      ]
    });
  };

  onClickTurnCoat = () => {
    this.setState({
      activatedItemContent:"Turncoat is a rhetoric event where the speakers contradict themselves. The speaker starts by taking a stance on the topic and switches sides after a specific duration of time",
      activatedItemHeader: "Turn Coat",
      activatedItemImg: TurnCoat,
      activatedItemMainEvent: "Litrary",
      activatedItemsCoordinators: [
        {
          name: "Contact:",
          phone: "123456789"
        },
        {
          name: "Contact",
          phone: "123456789"
        },
        {
          name: "Contact",
          phone: "123456789"
        }
      ]
    });
  };

  onClickSituationReact = () => {
    this.setState({
      activatedItemContent:" A questionnaire will be given and participants will have to answer how will they react in different situations. Short listing for the next round will be done based on the responses",
      activatedItemHeader: "Situation React",
      activatedItemImg: SituationReaction,
      activatedItemMainEvent: "Litrary",
      activatedItemsCoordinators: [
        {
          name: "Contact:",
          phone: "123456789"
        },
        {
          name: "Contact",
          phone: "123456789"
        },
        {
          name: "Contact",
          phone: "123456789"
        }
      ]
    });
  };

  onClickKavyamay = () => {
    this.setState({
      activatedItemContent:"‘Jaha na pahuche ravi waha pahuche kavi’ Likhne ka hai jajba wo bhi matrabhasha me to hai mauka aapke paas dikhao apni panktibaddh shabdo ki piroyi hui khoobsurat  mala ko aur bana do mahol ko kavyamay.",
      activatedItemHeader: "Kavyamay",
      activatedItemImg: Kavyamay,
      activatedItemMainEvent: "Litrary",
      activatedItemsCoordinators: [
        {
          name: "Contact:",
          phone: "123456789"
        },
        {
          name: "Contact",
          phone: "123456789"
        },
        {
          name: "Contact",
          phone: "123456789"
        }
      ]
    });
  };

  render() {
    return (
      <div className="event-wrapper">
        {/* modal */}
        <button className="back btn red" onClick={e => history.push("/")}>
          <i className="material-icons">arrow_back</i>
        </button>

        <div
          ref={Modal => {
            this.Modal = Modal;
          }}
          id="modal1"
          className="modal"
        >
          <div className="modal-content">
            <h4>{this.state.activatedItemHeader}</h4>
            <p>{this.state.activatedItemContent}</p>
            {this.state.message ? (
              <Alert style={{ color: "red" }}>{this.state.message}</Alert>
            ) : null}
            <br />
            <div className="row">
              <div className="col s6">
                <img
                  src={this.state.activatedItemImg}
                  alt="event"
                  style={{ height: "210px", width: "210px" }}
                  className="responsive-image"
                />
              </div>
              <div className="col s6 inner-content">
                <h4>Coordinators</h4>
                <p>
                  {this.state.activatedItemsCoordinators.map((elem, index) => {
                    return (
                      <p key={index}>
                        {elem.name}: {elem.phone}
                      </p>
                    );
                  })}
                  {this.state.activatedItemVenue
                    ? `VENUE: ${this.state.activatedItemVenue}`
                    : null}
                  <br />
                  {this.state.activatedItemAudition
                    ? `Audition: ${this.state.activatedItemAudition}`
                    : null}
                </p>

                <br />
                <div className="row">
                  <div className="col s6 btn-1">
                    <button
                      href="#"
                      className="modal-close waves-effect waves-red btn-flat red btn-small"
                      onClick={this.onCancelClick}
                    >
                      Close
                    </button>
                  </div>
                  <div className="col s6 btn-2">
                    <button
                      href="#"
                      className="waves-effect waves-red btn-flat blue btn-small"
                      onClick={this.onRegisterClick}
                    >
                      Register
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <nav className="navbar1">
          <ul>
            <li>
              <a href="#ADHYAAY" className="left">
                Hobby
              </a>
              <a href="#CUL" className="left">
                CULTURAL
              </a>
              <a href="#LIT" className="left">
                Literary
              </a>
            </li>
          </ul>
          <br />
        </nav>

        <div className="wrapper" id="ADHYAAY">
          <section id="section11">
            <a href="#section17">
              <i className="material-icons">keyboard_arrow_left</i>
            </a>
            <div className="item">
              <img
                className=" modal-trigger"
                data-target="modal1"
                style={{ height: "250px", width: "250px" }}
                src={TennisFootbal}
                alt="Movie"
                onClick={this.onClickTennisFootball}
              />
            </div>
            <div className="item">
              <img
                className=" modal-trigger"
                data-target="modal1"
                style={{ height: "250px", width: "250px" }}
                src={KhoKho}
                alt="Movie"
                onClick={this.onClickKhoKho}
              />
            </div>
            <div className="item">
              <img
                className=" modal-trigger"
                data-target="modal1"
                style={{ height: "250px", width: "250px" }}
                src={GullyCricket}
                alt="Movie"
                onClick={this.onClickGUllyCricket}
              />
            </div>
            <a href="#section12">
              <i className="material-icons">keyboard_arrow_right</i>
            </a>
          </section>
          <section id="section12">
            <a href="#section11">
              <i className="material-icons">keyboard_arrow_left</i>
            </a>
            <div className="item">
              <img
                className=" modal-trigger"
                data-target="modal1"
                style={{ height: "250px", width: "250px" }}
                src={ComingSoon}
                alt="Movie"
                onClick={this.onClickTrivia}
              />
            </div>
            <div className="item">
              <img
                className=" modal-trigger"
                data-target="modal1"
                style={{ height: "250px", width: "250px" }}
                src={ComingSoon}
                alt="Movie"
                onClick={this.onClickSackRace}
              />
            </div>
            <div className="item">
              <img
                className=" modal-trigger"
                data-target="modal1"
                style={{ height: "250px", width: "250px" }}
                src={ComingSoon}
                alt="Movie"
                onClick={this.onClickThreeLeggedRace}
              />
            </div>
            <a href="#section13">
              <i className="material-icons">keyboard_arrow_right</i>
            </a>
          </section>
          <section id="section13">
            <a href="#section12">
              <i className="material-icons">keyboard_arrow_left</i>
            </a>
            <div className="item">
              <img
                className=" modal-trigger"
                data-target="modal1"
                style={{ height: "250px", width: "250px" }}
                src={ComingSoon}
                alt="Movie"
                onClick={this.onClickLemonSpoonRace}
              />
            </div>
            <div className="item">
              <img
                className=" modal-trigger"
                data-target="modal1"
                style={{ height: "250px", width: "250px" }}
                src={ComingSoon}
                alt="Movie"
                onClick={this.onClickFrogRace}
              />
            </div>
            <div className="item">
              <img
                className=" modal-trigger"
                data-target="modal1"
                style={{ height: "250px", width: "250px" }}
                src={ComingSoon}
                alt="Movie"
                onClick={this.onClickBegBorrowOrSteal}
              />
            </div>
            <a href="#section14">
              <i className="material-icons">keyboard_arrow_right</i>
            </a>
          </section>
          <section id="section14">
            <a href="#section13">
              <i className="material-icons">keyboard_arrow_left</i>
            </a>
            <div className="item">
              <img
                className=" modal-trigger"
                data-target="modal1"
                style={{ height: "250px", width: "250px" }}
                src={ComingSoon}
                alt="Movie"
                onClick={this.onClickMusicalChairs}
              />
            </div>
            <div className="item">
              <img
                className=" modal-trigger"
                data-target="modal1"
                style={{ height: "250px", width: "250px" }}
                src={ComingSoon}
                alt="Movie"
                onClick={this.onClickSurvivalWar}
              />
            </div>
            <div className="item">
              <img
                className=" modal-trigger"
                data-target="modal1"
                style={{ height: "250px", width: "250px" }}
                src={ComingSoon}
                alt="Movie"
                onClick={this.onClickMurderMystery}
              />
            </div>
            <a href="#section15">
              <i className="material-icons">keyboard_arrow_right</i>
            </a>
          </section>
          <section id="section15">
            <a href="#section14">
              <i className="material-icons">keyboard_arrow_left</i>
            </a>
            <div className="item">
              <img
                className=" modal-trigger"
                data-target="modal1"
                style={{ height: "250px", width: "250px" }}
                src={ComingSoon}
                alt="Movie"
                onClick={this.onClickLivingOnTheEdge}
              />
            </div>
            <div className="item">
              <img
                className=" modal-trigger"
                data-target="modal1"
                style={{ height: "250px", width: "250px" }}
                src={ComingSoon}
                alt="Movie"
                onClick={this.onClickDumLagaKeHaisa}
              />
            </div>
            <div className="item">
              <img
                className=" modal-trigger"
                data-target="modal1"
                style={{ height: "250px", width: "250px" }}
                src={ComingSoon}
                alt="Movie"
                onClick={this.onClickPehchaanKaun}
              />
            </div>
            <a href="#section16">
              <i className="material-icons">keyboard_arrow_right</i>
            </a>
          </section>
          <section id="section16">
            <a href="#section15">
              <i className="material-icons">keyboard_arrow_left</i>
            </a>
            <div className="item">
              <img
                className=" modal-trigger"
                data-target="modal1"
                style={{ height: "250px", width: "250px" }}
                src={ComingSoon}
                alt="Movie"
                onClick={this.onClickDashRace}
              />
            </div>
            <div className="item">
              <img
                className=" modal-trigger"
                data-target="modal1"
                style={{ height: "250px", width: "250px" }}
                src={ComingSoon}
                alt="Movie"
                onClick={this.onClickExpresso}
              />
            </div>
            <div className="item">
              <img
                className=" modal-trigger"
                data-target="modal1"
                style={{ height: "250px", width: "250px" }}
                src={ComingSoon}
                alt="Movie"
                onClick={this.onClickPubg}
              />
            </div>
            <a href="#section17">
              <i className="material-icons">keyboard_arrow_right</i>
            </a>
          </section>
          <section id="section17">
            <a href="#section16">
              <i className="material-icons">keyboard_arrow_left</i>
            </a>
            <div className="item">
              <img
                className=" modal-trigger"
                data-target="modal1"
                style={{ height: "250px", width: "250px" }}
                src={ComingSoon}
                alt="Movie"
                onClick={this.onClickFacePainting}
              />
            </div>
            <div className="item">
              <img
                className=" modal-trigger"
                data-target="modal1"
                style={{ height: "250px", width: "250px" }}
                src={MinuteToWinIt}
                alt="Movie"
                onClick={this.onClickMinuteToWinIt}
              />
            </div>
            <a href="#section11">
              <i className="material-icons">keyboard_arrow_right</i>
            </a>
          </section>
        </div>
        <div className="wrapper" id="CUL">
          <section id="section21">
            <a href="#section24">
              <i className="material-icons">keyboard_arrow_left</i>
            </a>
            <div className="item">
              <img
                className=" modal-trigger test-img"
                data-target="modal1"
                style={{ height: "250px", width: "250px", zIndex: 1 }}
                src={BattleRap}
                alt="Movie"
                onClick={this.onClickBattleRap}
              />
            </div>
            <div className="item">
              <img
                className=" modal-trigger"
                data-target="modal1"
                style={{ height: "250px", width: "250px", zIndex: 2 }}
                src={Comique}
                alt="Movie"
                onClick={this.onClickComique}
              />
            </div>
            <div className="item">
              <img
                className=" modal-trigger"
                data-target="modal1"
                style={{ height: "250px", width: "250px", zIndex: 3 }}
                src={DefilDeModa}
                alt="Movie"
                onClick={this.onClickDefilDeModa}
              />
            </div>
            <a href="#section22">
              <i className="material-icons">keyboard_arrow_right</i>
            </a>
          </section>
          <section id="section22">
            <a href="#section21">
              <i className="material-icons">keyboard_arrow_left</i>
            </a>
            <div className="item">
              <img
                className=" modal-trigger"
                data-target="modal1"
                style={{ height: "250px", width: "250px" }}
                src={HbtuGotTalent}
                alt="Movie"
                onClick={this.onClickHbtuGotTalent}
              />
            </div>
            <div className="item">
              <img
                className=" modal-trigger"
                data-target="modal1"
                style={{ height: "250px", width: "250px" }}
                src={OpenMic}
                alt="Movie"
                onClick={this.onClickOpenMic}
              />
            </div>
            <div className="item">
              <img
                className=" modal-trigger"
                data-target="modal1"
                style={{ height: "250px", width: "250px" }}
                src={Sargam}
                alt="Movie"
                onClick={this.onClickSargam}
              />
            </div>
            <a href="#section23">
              <i className="material-icons">keyboard_arrow_right</i>
            </a>
          </section>
          <section id="section23">
            <a href="#section22">
              <i className="material-icons">keyboard_arrow_left</i>
            </a>
            <div className="item">
              <img
                className=" modal-trigger"
                data-target="modal1"
                style={{ height: "250px", width: "250px" }}
                src={GroupDance}
                alt="Movie"
                onClick={this.onClickGroupDance}
              />
            </div>
            <div className="item">
              <img
                className=" modal-trigger"
                data-target="modal1"
                style={{ height: "250px", width: "250px" }}
                src={SumoWrestling}
                alt="Movie"
                onClick={this.onClickSumoWrestling}
              />
            </div>
            <div className="item">
              <img
                className=" modal-trigger"
                data-target="modal1"
                style={{ height: "250px", width: "250px" }}
                src={ComingSoon}
                alt="Movie"
                onClick={this.onClickDanceFaceOff}
              />
            </div>
            <a href="#section24">
              <i className="material-icons">keyboard_arrow_right</i>
            </a>
          </section>
          <section id="section24">
            <a href="#section23">
              <i className="material-icons">keyboard_arrow_left</i>
            </a>
            <div className="item">
              <img
                className=" modal-trigger"
                data-target="modal1"
                style={{ height: "250px", width: "250px" }}
                src={ComingSoon}
                alt="Movie"
                onClick={this.onClickDanceSolo}
              />
            </div>
            <div className="item">
              <img
                className=" modal-trigger"
                data-target="modal1"
                style={{ height: "250px", width: "250px" }}
                src={ComingSoon}
                alt="Movie"
                onClick={this.onClickVogue}
              />
            </div>
            <div className="item">
              <img
                className=" modal-trigger"
                data-target="modal1"
                style={{ height: "250px", width: "250px" }}
                src={ComingSoon}
                alt="Movie"
                onClick={this.onClickDressToImpress}
              />
            </div>
            <a href="#section21">
              <i className="material-icons">keyboard_arrow_right</i>
            </a>
          </section>
        </div>
        <div className="wrapper" id="LIT">
          <section id="section31">
            <a href="#section35">
              <i className="material-icons">keyboard_arrow_left</i>
            </a>
            <div className="item">
              <img
                className=" modal-trigger responsive-image"
                data-target="modal1"
                style={{ height: "250px", width: "250px" }}
                src={MrMsLit}
                alt="Movie"
                onClick={this.onClickMrMsLit}
              />
            </div>
            <div className="item">
              <img
                className=" modal-trigger responsive-image"
                data-target="modal1"
                style={{ height: "250px", width: "250px" }}
                src={PotentialProfessor}
                alt="Movie"
                onClick={this.onClickPotentialProfessor}
              />
            </div>
            <div className="item">
              <img
                className=" modal-trigger responsive-image"
                data-target="modal1"
                style={{ height: "250px", width: "250px" }}
                src={ItsQuizTime}
                alt="Movie"
                onClick={this.onClickQuizzes}
              />
            </div>
            <a href="#section32">
              <i className="material-icons">keyboard_arrow_right</i>
            </a>
          </section>
          <section id="section32">
            <a href="#section31">
              <i className="material-icons">keyboard_arrow_left</i>
            </a>
            <div className="item">
              <img
                className=" modal-trigger"
                data-target="modal1"
                style={{ height: "250px", width: "250px" }}
                src={ComingSoon}
                alt="Movie"
                onClick={this.onClickPoetryPinnacle}
              />
            </div>
            <div className="item">
              <img
                className=" modal-trigger"
                data-target="modal1"
                style={{ height: "250px", width: "250px" }}
                src={Kavyamay}
                alt="Movie"
                onClick={this.onClickKavyamay}
              />
            </div>
            <div className="item">
              <img
                className=" modal-trigger"
                data-target="modal1"
                style={{ height: "250px", width: "250px" }}
                src={SituationReaction}
                alt="Movie"
                onClick={this.onClickSituationReact}
              />
            </div>
            <a href="#section33">
              <i className="material-icons">keyboard_arrow_right</i>
            </a>
          </section>
          <section id="section33">
            <a href="#section32">
              <i className="material-icons">keyboard_arrow_left</i>
            </a>
            <div className="item">
              <img
                className=" modal-trigger"
                data-target="modal1"
                style={{ height: "250px", width: "250px" }}
                src={TurnCoat}
                alt="Movie"
                onClick={this.onClickTurnCoat}
              />
            </div>
            <div className="item">
              <img
                className=" modal-trigger"
                data-target="modal1"
                style={{ height: "250px", width: "250px" }}
                src={PosterPresentation}
                alt="Movie"
                onClick={this.onClickPosterPresentation}
              />
            </div>
            <div className="item">
              <img
                className=" modal-trigger"
                data-target="modal1"
                style={{ height: "250px", width: "250px" }}
                src={ComingSoon}
                alt="Movie"
                onClick={this.onClickNaziWolf}
              />
            </div>
            <a href="#section34">
              <i className="material-icons">keyboard_arrow_right</i>
            </a>
          </section>
          <section id="section34">
            <a href="#section33">
              <i className="material-icons">keyboard_arrow_left</i>
            </a>
            <div className="item">
              <img
                className=" modal-trigger"
                data-target="modal1"
                style={{ height: "250px", width: "250px" }}
                src={ComingSoon}
                alt="Movie"
                onClick={this.onClickHumaraNetaKaisaHo}
              />
            </div>
            <div className="item">
              <img
                className=" modal-trigger"
                data-target="modal1"
                style={{ height: "250px", width: "250px" }}
                src={ComingSoon}
                alt="Movie"
                onClick={this.onClickChitrVichitr}
              />
            </div>
            <div className="item">
              <img
                className=" modal-trigger"
                data-target="modal1"
                style={{ height: "250px", width: "250px" }}
                src={ComingSoon}
                alt="Movie"
                onClick={this.onClickBakhan}
              />
            </div>
            <a href="#section35">
              <i className="material-icons">keyboard_arrow_right</i>
            </a>
          </section>
          <section id="section35">
            <a href="#section34">
              <i className="material-icons">keyboard_arrow_left</i>
            </a>
            <div className="item">
              <img
                className=" modal-trigger"
                data-target="modal1"
                style={{ height: "250px", width: "250px" }}
                src={ComingSoon}
                alt="Movie"
                onClick={this.onClickJingling}
              />
            </div>
            <div className="item">
              <img
                className=" modal-trigger"
                data-target="modal1"
                style={{ height: "250px", width: "250px" }}
                src={ComingSoon}
                alt="Movie"
                onClick={this.onClickJam}
              />
            </div>
            <div className="item">
              <img
                className=" modal-trigger"
                data-target="modal1"
                style={{ height: "250px", width: "250px" }}
                src={ComingSoon}
                alt="Movie"
                onClick={this.onClickBangTheBench}
              />
            </div>
            <a href="#section31">
              <i className="material-icons">keyboard_arrow_right</i>
            </a>
          </section>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user
});

export default connect(
  mapStateToProps,
  null
)(Events);
