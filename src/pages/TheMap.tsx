import austinmap from '../assets/images/austinmap.png';

function TheMap() {
  return (
    <>
  <h3>Map</h3>
  <p>Map of the Top 10 Most Dangerous Streets</p>
  <img
    src={austinmap}
    alt="mapofdangerousstreets"
    height={350}
    width={350}
  />{" "}
  <br />
  <a href="https://www.mapcustomizer.com/map/Dangerous%20Streets%20of%20Austin">Click Here for Interactive Map</a>
  <br />
  <b>Rankings</b>
  <p>
    The most dangerous street at number 1 is the IH-35 Service Road with an
    average of 4 reports per month. 2nd place goes to Lamar Blvd with 3.66 per
    month. At 3rd is Slaughter Ln with 3 reports per month. 4th, 5th and 6th
    place are tied with 2.66 reports per month, these streets being Research
    Blvd, Parmer Ln, and FM 620 respectively. The rest are all tied at 2 reports
    per month. These streets being S Congress Ave, Ben White Blvd, E Oltorf St
    and Menchaca Rd respectively.
  </p>
</>

  )
}

export default TheMap