import { Component } from '@angular/core';
import { NavController, AlertController, ToastController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  Quizz:string="Celebtrity"
  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public alertCtrl: AlertController) {

  }
  celebrity1: string;
  celebrity2: string;
  celebrity3: string;
  celebrity4: string;
  celebrity5: string;

  computer1: string;
  computer2: string;
  computer3: string;
  computer4: string;
  computer5: string;


  
  soccer1:string;
  soccer2: string;
  soccer3: string;
  soccer4: string;
  soccer5: string;


  celeb1=["Nandi", "Boity", "Minnie", "Zodwa"];
  celeb2=["AKA", "Capper Nyovest", "Dj Zinhle", "Bonang"];
  celeb3=["Peral Thusi", "Charlize Theron", "Nandi", "Trevor Noah"];
  celeb4=["The Daily Show", "Selimathunzi", "Jika Majika", "Live Amp"];
  celeb5=["1894", "1945", "2007", "1942"];

  soccerQs1=["Eden Hazard", "Gabriel Jesus", "Phillipe Coutinho", "Neymar"];
  soccerQs2=["Itu Khune", "Katsandze", "Tshabalala", "Paez"];
  soccerQs3=["Benny MCarthy", "Pitso", "Hunt", "Motaung"];
  soccerQs4=["Motsepe", "Pitso", "J Modise", "Mahole Baldwin"];
  soccerQs5=["Kaizer Chiefs", "Orlando Pirates", "Sundowns", "Jomo Cosmos"];


  computerQs1=["Laptop", "Booktop", "RAM", "CPU"];
  computerQs2=["Norton", "Microsoft", "McFee", "AVG"];
  computerQs3=["1TB", "1GB", "10GB", "55000Bytes"];
  computerQs4=["True", "False"];
  computerQs5=["Yahoo", "Google", "Edge", "internet Explore"];

  CelebAnswer1="Boity";
  CelebAnswer2="Capper Nyovest";
  CelebAnswer3="Charlize Theron";
  CelebAnswer4="The Daily Show";
  CelebAnswer5="1942";


  soccerAns1="Eden Hazard";
  soccerAns2="Itu Khune";
  soccerAns3="Benny MCarthy";
  soccerAns4="Motsepe";
  soccerAns5="Sundowns";


  computerAns1="Laptop";
  computerAns2="McFee";
  computerAns3="10GB";
  computerAns4="True";
  computerAns5="Google";


  celebcount1=0;
  celebcount2=0;
  celebcount3=0;
  celebcount4=0;
  celebcount5=0;

  compCount1=0;
  compCount2=0;
  compCount3=0;
  compCount4=0;
  compCount5=0;

  soccCount1=0;
  soccCount2=0;
  soccCount3=0;
  soccCount4=0;
  soccCount5=0;



  totalCelebrityScore=0;
  totalScoccerScore=0;
  totalCompScore=0;
  percscored=0;
  checkFinalscore=0;
  celebr1():number{
    if(this.celebrity1===this.CelebAnswer1){
      this.celebcount1 = 1;
    }
    return this.celebcount1;
  }
  celebr2():number{

    if (this.celebrity2===this.CelebAnswer2){
      this.celebcount2=1
    }
    return this.celebcount2;
  }
  celebr3():number{
    if (this.celebrity3===this.CelebAnswer3){
      this.celebcount3=1
    }
    return this.celebcount3;
  }

  celebr4(): number {
    if (this.celebrity4===this.CelebAnswer4) {
      this.celebcount4=1
    }
    return this.celebcount4;
  }
  celebr5(): number {
    if (this.celebrity5 === this.CelebAnswer5) {
      this.celebcount5 = 1
    }
    return this.celebcount5;
  }

  


  compFuct1():number{
    if(this.computer1===this.computerAns1){
      this.compCount1 = 1;
    }
    return this.compCount1;
  }
  compFuct2():number{

    if (this.computer2===this.computerAns2){
      this.compCount2=1;
    }
    return this.compCount2;
  }
  compFuct3():number{
    if (this.computer3===this.computerAns3){
      this.compCount3=1;
    }
    return this.compCount3;
  }

  compFuct4(): number {
    if (this.computer4===this.computerAns4) {
      this.compCount4=1;
    }
    return this.compCount4;
  }
  compFuct5(): number {
    if (this.computer5 === this.computerAns5) {
      this.compCount5 = 1
    }
    return this.compCount5;
  }

  


  soocerFuct1():number{
    if(this.soccer1===this.soccerAns1){
      this.soccCount1 = 1;
    }
    return this.soccCount1;
  }
  soocerFuct2():number{

    if (this.soccer2===this.soccerAns2){
      this.soccCount2=1;
    }
    return this.soccCount2;
  }
  soocerFuct3():number{
    if (this.soccer3===this.soccerAns3){
      this.soccCount3=1;
    }
    return this.soccCount3;
  }

  soocerFuct4(): number {
    if (this.soccer4===this.soccerAns4) {
      this.soccCount4=1;
    }
    return this.soccCount4;
  }
  soocerFuct5(): number {
    if (this.soccer5 === this.soccerAns5) {
      this.soccCount5 = 1;
    }
    return this.soccCount5;
  }


  totalCelebScore():void{
    this.totalCelebrityScore=this.celebr1()+this.celebr2()+this.celebr3()+this.celebr4()+this.celebr5();
  }

  totalSoccScore():void{

    this.totalScoccerScore=this.compFuct1()+this.compFuct2()+this.compFuct3()+this.compFuct4()+this.compFuct5();
  }


  totalComputerScore():void{
     this.totalCompScore=this.soocerFuct1()+this.soocerFuct2()+this.soocerFuct3()+this.soocerFuct4()+this.soocerFuct5();
  }
  submitCelebScore():void{
      this.totalCelebScore();

  }

  subitCompScor():void{

    this.totalComputerScore();
  }

  subitSoccerScor():void{
    this.totalSoccScore();
  }

  calcPerc():void{
    this.percscored=(this.checkFinalscore/15)*100;
  } 


  checkscore():void{
    this.checkFinalscore=this.totalCelebrityScore+this.totalScoccerScore+this.totalCompScore;
    this.calcPerc();
    this.showAlertScore();
  }
  showAlertScore(){
  
    const alert=this.alertCtrl.create({
      title:'Lets see how you did ',
      subTitle:'Your total score is:'+this.totalCelebrityScore+', logic score: '+this.totalScoccerScore+', and computer score: '+this.totalCompScore+'. percentage:'+this.percscored.toFixed(0)+'%',
      buttons:[{text:'OK',
      handler:data=>{
        location.reload();
      }
    }]
    });
    alert.present();
  }
  CeleBrityAlertcore(){

    const alert=this.alertCtrl.create({
      subTitle:'Celebrity Score is: '+this.totalCelebrityScore,
            buttons:[{text:'OK'}]
    });
    alert.present();
  }
  SoccerAlert(){
  
    const alert=this.alertCtrl.create({
      subTitle:'Soccer Score is: '+this.totalScoccerScore,
      buttons:[{text:'OK'}]
    });
    alert.present();
  }
  computerAlert(){
  
    const alert=this.alertCtrl.create({
      subTitle:'Computer Score is: '+this.totalComputerScore,
      buttons:[{text:'OK'}]
    });
    alert.present();
  }
   submitedCelebrity():void{
    const toast = this.toastCtrl.create({
      message:'Successfully submited',
      position:'middle',
      duration: 1000
    });
    toast.present();
  }
  submitedLQuiz():void{
    const toast = this.toastCtrl.create({
      message:'Successfully submited',
      position:'middle',
      duration: 1000
    });
    toast.present();
  }
  submitedCQuiz():void{
    const toast = this.toastCtrl.create({
      message:'Successfully submited',
      position:'middle',
      duration: 1000
    });
    toast.present();
  }
}
