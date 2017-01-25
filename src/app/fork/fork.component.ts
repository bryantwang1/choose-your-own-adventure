import { Component, OnInit } from '@angular/core';
import { Scenario } from './../scenario.model';
import { ScenarioService } from './../scenario.service';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-fork',
  templateUrl: './fork.component.html',
  styleUrls: ['./fork.component.css'],
  providers: [ScenarioService]
})
export class ForkComponent implements OnInit {
  currentScenario: Scenario;
  lastChoice: number;

  constructor(
    private router: Router,
    private scenarioService: ScenarioService,
    private route: ActivatedRoute,
    private location: Location,
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParametersArray) => {
      this.lastChoice = urlParametersArray['choiceNumber'];
    });
    this.currentScenario = this.scenarioService.getScenario(this.lastChoice);
  }


  nextFork(clickedChoice: string) {
    console.log('choice: ' + clickedChoice);
    for(var i=0;i < this.currentScenario.choices.length;i++) {
      if(this.currentScenario.choices[i] === clickedChoice) {
        this.scenarioService.incrementFork();
        this.router.navigate(['']);
        this.router.navigate(['fork', i]);
      }
    }
  }

}
