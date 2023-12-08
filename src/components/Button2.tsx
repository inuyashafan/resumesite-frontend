import { useState } from 'react';

const Button2 = () => {
  
  const [isClicked, setIsClicked] = useState(false);

  
  const handleButtonClick = () => {
    
    setIsClicked(!isClicked);
  };

  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: '#3498db',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  return (
    <div>
      <button style={buttonStyle} onClick={handleButtonClick}>
        See Data Summary
      </button>

      
      {isClicked && <p>Why were some streets more dangerous than others? Why did some streets even appear in the reports at all despite 
         being in seemingly safe locations? Why are some hours of the day more dangerous than others? Let me break it down for you.
         The road with the most reports according to the data is the service road for the IH-35 highway, but why might this be? There are two
         reasons: population density and homelessness. IH 35 passes through south Austin and downtown, the most densely populated parts of Austin. 
         Furthermore, IH-35 passes through downtown as I mentioned early, this is where all the clubs, bars and venues are and people in this area especially on 
         weekends are more likely to be under the influence of some sort of substance making getting into an altercation with someone (and thus someone reporting 
         harassment) more likely. About the homelessness, homeless people often camp next to highways, and with IH-35 passing through the most densely populated 
         parts of Austin its just more likely that the general public will have an encounter with a homeless person and report them for harassment. This would 
         explain some other streets to as several of the streets in the top 10 are either service roads or roads with lots of homeless people. This leads us to 
         believe that by avoiding interacting with the local homeless you will be safe from harassment. Now let's look at the time vs harassment, as we see around
         noon and around midnight seem to be the most dangerous times but why is this? For the afternoon, 12PM is most likely the time when most of Austin is awake
         it is also a common time for schools and employers to give students and workers a lunch break, meaning people are out and about talking with friends and
         visiting restaurants. Since the most people are awake and out and about it is just more likely at this time people will interact in public and inevitably 
         have negative interactions which lead to harassment report. Well what about midnight, why do so many reports occur at that hour? At this time criminals 
         may feel more emboldened to commit crime due to there being less people and thus potential witnesses out. Also at this hour of the day especially on 
         weekends people are more likely be out at clubs and venues partying and in these situations are more likely to be under the influence of drugs which could 
         lead to altercations that result in harassment reports. From this data we can conclude Austin is a relatively safe city but you should avoid interacting 
         with homeless populations as they can be more prone to agression and when going out on weekends exercise caution as someone under the influnce is more 
         prone to poor choices and can cause you trouble!</p>}
    </div>
  );
};

export default Button2;
