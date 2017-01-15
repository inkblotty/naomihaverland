import React, { Component } from 'react';
import { Link } from 'react-router';
import Slider from 'react-slick';

import Loading from '../images/loading.svg';

import '../css/Gallery.css';

import AbeLincoln from '../images/portraits/abelincoln.jpg';
import AnnieOakley from '../images/chalk/annieoakley.jpg';
import Anniversary from '../images/other/The_Anniversary.jpg';
import AwsumMural from '../images/other/16th_street_mural.jpg';
import BackYard1 from '../images/other/Back_Yard_Cap_Fence.JPG';
import BackYard2 from '../images/other/Back_Yard_Tree_House.JPG';
import BenFranklin from '../images/chalk/benfranklin.jpg';
import BoyWithAFancy from '../images/portraits/A5_Boy_with_a_fancy_Bowtie.jpg';
import CherryCreekMask from '../images/other/Cherry_Creek_Mask_Project.bmp';
import Chicken from '../images/portraits/chicken.jpg';
import CliveChalk from '../images/chalk/clive.jpg';
import ClivePencil from '../images/portraits/1Clives_pencil_trick.jpg';
import DameEdna from '../images/portraits/7Dame_Edna_in_the_Spotlight.jpg';
import DavidandPirates from '../images/portraits/A6_David_and_the_Pirates.jpg';
import Denver2011 from '../images/chalk/Denver_Chalk_Art_Festival_2011.JPG';
import Denver2012 from '../images/chalk/Denver_Chalk_Art_Festival_2012.JPG';
import Denver2013 from '../images/chalk/Denver_Chalk_Art_Festival_2013.JPG';
import Denver2014 from '../images/chalk/Denver_Chalk_Art_Festival_2014.JPG';
import DiaBeerGarden from '../images/other/DIA_Beer_Garden_Table.JPG';
import EarMini from '../images/portraits/earmini.jpg';
import EmilyEnjoys from '../images/portraits/A3_Emily_Enjoys_a_Cloudy_Day_in_Colorado.jpg';
import ErinInRed from '../images/portraits/A2_Erin_in_Red.jpg';
import Eyeball from '../images/portraits/eyeballmini.jpg';
import FlowerGirl from '../images/portraits/A9_The_Flower_Girl.jpg';
import Gingerbread1 from '../images/other/Gingerbread_house_1.JPG';
import Gingerbread2 from '../images/other/Gingerbread_House_2.jpg';
import Gingerbread3 from '../images/other/Gingerbread_House_3.jpg';
import Gingerbread4 from '../images/other/Gingerbread_House_4.JPG';
import Gingerbread5 from '../images/other/Gingerbread_House_5.JPG';
import HelloMyNameIsAwsum from '../images/portraits/A4_Hello_My_Name_is_Awsum.jpg';
import Houston1 from '../images/chalk/houston1.jpg';
import Houston2016 from '../images/chalk/houston2016.jpg';
import JensonIsNotHappy from '../images/portraits/A8_Jenson_is_not_Happy.jpg';
import KidRock1 from '../images/chalk/Kid_Rock_Portrait.JPG';
import KidRock2 from '../images/chalk/Kid_Rock_Portrait_2.JPG'
import LeonardKnight from '../images/portraits/A1_Leonard_Knight_at_Salvation_Mountain.jpg';
import LadyBug from '../images/chalk/IMG_6418.jpg';
import LickMini from '../images/portraits/lickmini.jpg';
import MakeALovelyFace from '../images/portraits/9Make_a_Lovely_Face_Roxanne.jpg';
import ManualForSpeed from '../images/chalk/Manual_for_Speed.JPG';
import Marietta from '../images/chalk/marietta.jpg';
import MiloBirthday from '../images/portraits/B1_Milo_on_his_Birthday.jpg';
import MrRabbit from '../images/other/Mr_Rabbit_and_Mrs_Dear.jpg';
import PennyHorse from '../images/portraits/B2_The_Penny_Horse.jpg';
import Phoropter from '../images/portraits/8The_Phoropter.jpg';
import Piano from '../images/other/16th_Street_Mall_Piano.JPG';
import RingPop from '../images/portraits/2Ring_Pop.JPG';
import RadiatingHeart from '../images/other/Radiating_Heart_Body_Paint.JPG';
import RockyMountain from '../images/chalk/rockymountainshowdown.jpg';
import ScumBathroom1 from '../images/other/Scum_of_the_Earth_Bathroom_Project.JPG';
import ScumBathroom2 from '../images/other/scum_of_the_earth_bathroom_project_2.JPG';
import ScumIcon from '../images/other/16.jpg';
import SeeingBlue from '../images/portraits/3Seeing_Blue.jpg';
import TheDemiseOfBarbie from '../images/portraits/5The_Demise_of_Barbie.jpg';
import Tunnel from '../images/other/14.jpg';
import Uber1 from '../images/other/1.jpg';
import Uber2 from '../images/other/13.jpg';
import Uber3 from '../images/other/7.jpg';
import UncleNeil from '../images/portraits/6Uncle_Neil.jpg';
import VirginMary from '../images/other/Virgin_Mary_Body_Paint.JPG';
import WeddingHead from '../images/other/Wedding_Head_in_Hole.JPG';
import WillyWonka from '../images/chalk/IMG_6175.jpg';
import XanderFly from '../images/portraits/B3_Xander_Can_Fly.jpg';


const images = {
  portraits: [
    { url: ClivePencil, title: 'Clive\'s Pencil Trick', description: 'Clive\'s Pencil Trick, Portrait of Naomi\'s neighbor, Clive, with a pencil in his nose' },
    { url: RingPop, title: 'Ring Pop', description: 'Ring Pop, Portrait of Naomi\'s daughter with ring pop on finger' },
    { url: SeeingBlue, title: 'Seeing Blue', description: 'Seeing Blue, portrait of young girl with blue goggles on' },
    { url: TheDemiseOfBarbie, title: 'The Demise of Barbie', description: 'The Demise of Barbie, Portrait of Naomi with Barbie doll in mouth' },
    { url: UncleNeil, title: 'Uncle Neil', description: 'Uncle Neil, portrait of Neil holding a teddy bear next to his face' },
    { url: DameEdna, title: 'Dame Edna in the Spotlight', description: 'Dame Edna in the Spotlight, Portrait of Edna in cat eye glasses' },
    { url: Phoropter, title: 'The Phoropter', description: 'The Phoropter, Portrait of girl with eye doctor phoropter in front of her face' },
    { url: MakeALovelyFace, title: 'Make a Lovely Face, Roxanne', description: 'Make a Lovely Face Roxanne, Portrait of Roxanne Haverland with her fingers stretching her mouth' },
    { url: LeonardKnight, title: 'Leonard Knight at Salvation Mountain', description: 'Leonard Knight at Salvation Mountain, Portrait of Leonard in front of his creation Salvation Mountain in Niland, California' },
    { url: ErinInRed, title: 'Erin in Red', description: 'Erin in Red, Portrait of Erin in a red dress' },
    { url: EmilyEnjoys, title: 'Emily Enjoys a Cloudy Day', description: 'Emily Enjoys a Cloudy Day in Colorado, Portrait of Emily in a field holding a pinwheel' },
    { url: HelloMyNameIsAwsum, title: 'Hello My Name is Awsum', description: 'Hello My Name is Awsum, Portrait of girl with face painted and Burger King crown; appeared on 16th street mall' },
    { url: BoyWithAFancy, title: 'Boy with a Fancy Bowtie', description: 'Boy with a Fancy Bowtie, Portrait of boy with his face painted and a bow painted on his chest' },
    { url: DavidandPirates, title: 'David and the Pirates', description: 'David and the Pirates, Portrait of David with blue glasses shouting "Arr!" at a pirate ship' },
    { url: JensonIsNotHappy, title: 'Jenson is Not Happy', description: 'Jenson Is Not Happy, Portrait of a baby, Jenson, crying' },
    { url: FlowerGirl, title: 'The Flower Girl', description: 'The Flower Girl, Portrait of a girl in red glasses in front of a white wedding cake' },
    { url: AbeLincoln, title: 'Abe Lincoln', description: 'Abe Lincoln, Portrait of Abraham Lincoln' },
    { url: MiloBirthday, title: 'Milo on his Birthday', description: 'Milo on his Birthday, Portrait of Milo with a McDonald\'s crown and fries in his ears with birthday balloons' },
    { url: PennyHorse, title: 'The Penny Horse', description: 'The Penny Horse, Portrait of a girl riding a blue 1 cent horse at King Soopers grocery store' },
    { url: XanderFly, title: 'Xander can Fly', description: 'Xander Can Fly, Portrait of boy with face painted in front of hot air balloons' },
    { url: Chicken, description: 'portrait of a chicken in an orange bow tie' },
    { url: EarMini, description: 'portrait of an ear' },
    { url: Eyeball, description: 'portait of an eye held open by two fingers' },
    { url: LickMini, description: 'portrait of a mouth with tongue sticking out' }
  ],
  chalk: [
    { url: AnnieOakley, title: 'Annie Oakley', description: 'chalk art portrait of Annie Oakley on brick sidewalk' },
    { url: BenFranklin, title: 'Ben Franklin', description: 'chalk art portrait of Benjamin Franklin on asphalt' },
    { url: CliveChalk, title: 'Clive\'s Pencil Trick', description: 'chalk art of Clive\'s Pencil Trick portait, a boy with a pencil in his nose' },
    { url: Denver2011, description: 'chalk art from the Denver Chalk Art Festival in 2011' },
    { url: Denver2012, title: 'Make a Lovely Face, Roxanne', description: 'chalk art from the Denver Chalk Art Festival in 2012, Make a Lovely Face, Roxanne' },
    { url: Denver2013, title: 'Finger Stache', description: 'chalk art from the Denver Chalk Art Festival in 2013, Rocket with a moustache on his finger over his lip' },
    { url: Denver2014, description: 'chalk art from the Denver Chalk Art Festival in 2014' },
    { url: Houston1, description: 'chalk art of girl with banana on her head' },
    { url: Houston2016, description: 'chalk art of Mr Bean' },
    { url: WillyWonka, description: 'chalk art portrait of Gene Wilder as Willy Wonka' },
    { url: LadyBug, description: 'chalk art portrait of Roxanne with a lady bug on her face' },
    { url: KidRock1, description: 'chalk art portrait of Kid Rock 1' },
    { url: KidRock2, description: 'chalk art portrait of Kid Rock 2' },
    { url: ManualForSpeed, description: 'chalk art portait of tiger mouth' },
    { url: Marietta, title: 'Marietta', description: 'Marietta, chalk art of elderly scholar with book and glasses in his hands' },
    { url: RockyMountain, description: 'chalk art of painted face, half for the Rams in green and white, and half for the Buffs in Gold and Black' }
  ],
  misc: [
    { url: Uber1, description: 'Mural for Denver\'s Uber office by Naomi Haverland' },
    { url: Uber2, description: 'View 2 of Mural for Denver\'s Uber office by Naomi Haverland' },
    { url: Tunnel, description: 'Smiling sun ray mural street art below I-36 in Westminster on Big Dry Creek Trail' },
    { url: ScumIcon, description: 'Religious icon of archangel Michael on the side door of Scum of the Earth Church' },
    { url: Piano, description: 'Painted piano on the 16th street mall in Denver' },
    { url: AwsumMural, description: 'Large mural of My Name is Awsum near 16th street mall in Denver' },
    { url: Uber3, description: 'View 3 of Mural for Denver\'s Uber office' },
    { url: BackYard1, description: 'fence art made of plastic caps in back yard' },
    { url: BackYard2, description: 'painted tree house in back yard' },
    { url: CherryCreekMask, description: 'mask of a baboon face for Cherry Creek' },
    { url: DiaBeerGarden, description: 'painted table in the Denver International Airport Beer Garden' },
    { url: Gingerbread1, description: 'green gingerbread house with face and tongue sticking out' },
    { url: Gingerbread2, description: 'blue and orange gingerbread house' },
    { url: Gingerbread3, description: 'gingerbread house castle with spires' },
    { url: Gingerbread4, description: 'multicolored gingerbread house with rainbow pathway' },
    { url: Gingerbread5, description: 'gingerbread house church with cross and heart' },
    { url: MrRabbit, description: 'painting of Mr Rabbit and Mrs Dear' },
    { url: RadiatingHeart, description: 'Body art painting with Radiating Heart by Naomi Haverland' },
    { url: ScumBathroom1, description: 'portion of mural in the bathroom at Scum of the Earth Church in Denver' },
    { url: ScumBathroom2, description: 'portion of the mural in the bathroom at Scum of the Earth Church in Denver' },
    { url: Anniversary, description: 'painted snowboards of a husband and wife pair' },
    { url: VirginMary, description: 'body art painting of the Virgin Mary' },
    { url: WeddingHead, description: 'head in a hole of a rabbit playing a banjo on a swing and a deer playing an accordion nearby; made for a wedding' }
  ]
}

class Gallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
    }
  }

  componentWillReceiveProps = (newProps) => {
    if (newProps.params.group !== this.props.params.group) {
      var self = this;
      this.setState({
        loading: true,
      }, () => {
        window.setTimeout(() => {
          self.setState({
            loading: false,
          })
        }, 300);
      })
    }
  }

  render() {
    let currImages = images[this.props.params.group];
    let urlsOnly = currImages.map((img) => { return img.url; });

    var sliderSettings = {
        arrows: true,
        customPaging: function(i) {
          return <a href='#'><img src={ urlsOnly[i] } role='presentation' /></a>
        },
        dots: true,
        dotsClass: 'slick-dots slick-thumb',
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };

    currImages = currImages.map((img, i) => {
      let attributes = {
        src: img.url,
        alt: img.description,
      };

      if (img.title) {
        attributes.title = img.title;
      }

      return (
        <div key={ `slider-img-${i}` } className='slider-image-wrapper'>
          <img {...attributes} />
        </div>
      )
    })

    return (
      <div className='gallery'>
        <nav className='gallery-nav'>
          <h5>
            <span className='u-sr-only'>Naomi Haverland's </span>Gallery<span className='u-sr-only'> of work</span>
          </h5>
          <div className='center-nav'>
            <Link to='/gallery/portraits'>Portraits</Link>
            <Link to='/gallery/chalk'>Chalk Art</Link>
            <Link to='/gallery/misc'>Other work</Link>
          </div>
          <Link to='/'>Go back</Link>
        </nav>
        <div className='slider-container'>
          <Slider {...sliderSettings}>
            { this.state.loading ? 
              <div className='slider-image-wrapper loading'>
                <img src={ Loading } alt='this section is loading...' />
              </div>
              : currImages }
          </Slider>
        </div>
      </div>
    )
  }
}

export default Gallery;