export interface Poll {
  id: number; //12th poll
  question: string; // Which party you like the most
  results: number[]; // [0,1,2,3,4]
  options: string[]; // [AAP,BJP,INC,Left,Other]
  thumbnail: string; // link to relevant graphic
}

export interface Voter
 {
   id: string; //hash 0xJ12H...
   voted: number[]; //[12]
 }
