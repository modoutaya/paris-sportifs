import { TestBed } from "@angular/core/testing";
import { TeamBuilderService } from "./team-builder.service";

describe("TeamBuilderService", () => {
  let service: TeamBuilderService;
  let json;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TeamBuilderService]
    });
    service = TestBed.get(TeamBuilderService);
    json = {
      idTeam: 10,
      strTeam: "Team test",
      strTeamBanner: "Banner test",
      strCountry: "Country test",
      strLeague: "League test",
      strDescriptionFR: "Description test",
      strTeamBadge: "Team badge test"
    };
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("should create team object", () => {
    const teamTest = service.createTeam(json);
    expect(teamTest.id).toEqual(json.idTeam);
    expect(teamTest.name).toEqual(json.strTeam);
    expect(teamTest.banner).toEqual(json.strTeamBanner);
    expect(teamTest.description).toEqual(json.strDescriptionFR);
    expect(teamTest.badge).toEqual(json.strTeamBadge);
  });

  it("should create team array", () => {
    const teamArrayTest = service.createMultiTeam([json]);
    expect(teamArrayTest[0].id).toEqual(json.idTeam);
    expect(teamArrayTest[0].name).toEqual(json.strTeam);
    expect(teamArrayTest[0].banner).toEqual(json.strTeamBanner);
    expect(teamArrayTest[0].description).toEqual(json.strDescriptionFR);
    expect(teamArrayTest[0].badge).toEqual(json.strTeamBadge);
  });
});
