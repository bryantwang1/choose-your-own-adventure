export class Scenario {
  public choices: string[] = [];
  public gameEnder: boolean = false;

  constructor(public content: string, public choice1: string, public choice2: string) {
    if(choice1 === '' && choice2 === '') {
      this.gameEnder = true;
    }
    else {
      this.choices.push(choice1);
      this.choices.push(choice2);
    }
  }

  addChoice(authorChoice) {
    this.choices.push(authorChoice);
  }
}
