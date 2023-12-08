import bargraph from '../assets/images/bargraph.jpg';
import myRgraph from '../assets/images/myRgraph.jpeg';
import piefigure from '../assets/images/piefigure.png';
import statisticalmeasures from '../assets/images/statisticalmeasures.jpeg';
import Button2 from '../components/Button2';



function Home() {
    return (
        <>
           <>
  <title>Austin Safety</title>
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link
    rel="stylesheet"
    href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"
  />
  <div className="container mt-4 text-center">
    <h1>Hey Austin! KYS - Keep Yourself Safe </h1>
    <h4>
      This website brought to you by John Abreu shows data on harassment reports
      of Fall 2023 in the area of Austin, Texas.
    </h4>
    With this information know where to go and where to avoid! Know what times
    are best and worse to go out.
  </div>
  
    <div className="row">
      <div className="col-sm-6">
        <h3>Raw Data</h3>
        <table>
          <tbody>
            <tr>
              <th>Category</th>
              <th>Data</th>
            </tr>
            <tr>
              <td>Incidents in August</td>
              <td>163</td>
            </tr>
            <tr>
              <td>Incidents in September</td>
              <td>213</td>
            </tr>
            <tr>
              <td>Incidents in October</td>
              <td>181</td>
            </tr>
            <tr>
              <td>Incidents Fall 2023</td>
              <td>557</td>
            </tr>
            <tr>
              <td>Dangerous Streets</td>
              <td>
                IH-35 service road, Lamar Blvd, Slaughter Ln, Research Blvd,
                Parmer Ln
              </td>
            </tr>
          </tbody>
        </table>
        <b>
          Statistical measures for the linear model of the time vs reports graph
        </b>
        <img
          src={statisticalmeasures}
          alt="staticalmeasures"
          height={300}
          width={300}
        />
        <br />
        <b>Brief Graph Explanation</b>
        <p>
          The bar graph of the 5 most dangerous streets displays the average
          number of harassment reports per month during the fall 2023 period
          (August, September, and October) with these streets being the highest
          in Austin. In the graph of time vs reports, for each month we look at
          the hour of the day and number of reports that occur within that hour
          and average it out across all 3 months to see which times are safest
          and which are not. For the final pie chart, for each month I looked at
          how many streets total there are where harassment reports occured,
          then I found how many streets that month only had one report and how
          many had over 1. Averaged it out for all 3 months then compared the
          percentages of streets with just 1 to streets with more than 1.
        </p>
        <h3>Data Summary</h3>
        <p>
          Data often exist in what is considered "raw data". This means that
          data is in the form of large files such as .txt files or .sql files
          and just looking at it directly, it can be hard to understand for most
          people. This is why data is broken down into visualizations aka graphs
          and charts. With just one glance over a chart or graph even someone
          not familiar with statistics or data can look at the situation and get
          a clear idea to what is happening. Even then, data visualizations
          might not tell us everything, they showcase the numbers in an easy way
          to understand but often don't tell us why the numbers are the way they
          are. That is what a data summary is for. A data summary is a few
          sentences or paragraphs to explain why the data occured the way it
          did.
        </p>
        <b>My Data Summary</b>
        
         <Button2></Button2>

      </div>
      <div className="col-sm-6">
        <h3>Data Visualized</h3>
        <p>Brought to you by pyplot and R</p>
        <b>5 Most Dangerous Streets</b>
        <br />
        <img
          src={bargraph}
          height={300}
          width={350}
          alt="bargraphofdangerousstreets"
        />
        <div>
          <b>Time of day most likely to be harassed</b>
          <img
            src={myRgraph}
            alt="timevsreports"
            height={300}
            width={350}
          />
        </div>
        <b>
          How many streets only have 1 incident per month vs streets with more
        </b>
        <img src={piefigure} alt="piechart" height={400} width={400} />
      </div>
    </div>
  
  
</>


      </>
      
    )
}

export default Home