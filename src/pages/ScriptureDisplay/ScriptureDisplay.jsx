import * as scripturesAPI from '../../utilities/scriptures-api';
import * as userService from '../../utilities/users-service';



export default function ScriptureDisplay() {
  // Function to get a random index in the given range
  function getRandomIndex(max) {
    return Math.floor(Math.random() * max);
  }





  const scriptures = [
    {
      book: 'John',
      verse: '16:33',
      read: 'In the world you will have tribulation. But take heart; I have overcome the world.',
    },
    {
      book: 'Isaiah',
      verse: '41:10',
      read:
        '"So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand."',
    },
    {
      book: 'Philippians',
      verse: '4:6-7',
      read:
        '"Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus"',
    },
    {
      book: 'John',
      verse: '16:33',
      read: 'In the world you will have tribulation. But take heart; I have overcome the world.',
    },
    {
      book: 'John',
      verse: '16:33',
      read: 'In the world you will have tribulation. But take heart; I have overcome the world.',
    },
  ];

  // Create an array of random indexes for selecting random scriptures
  const randomIndexes = Array.from({ length: 1 }, () => getRandomIndex(scriptures.length));

  // Map over the randomIndexes array and display random scriptures
  const randomScriptures = randomIndexes.map((index) => (
    <div key={index}>
      <h2>{scriptures[index].book} {scriptures[index].verse}</h2>
      <p>{scriptures[index].read}</p>
    </div>
  ));

  // Render the random scriptures
  return (
    <div>
      {randomScriptures}
    </div>
  );
}
