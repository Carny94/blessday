

export default function ScriptureDisplay() {

//---------------Declare variable

const [createAPIScripture, setCreateAPIScripture] = useState(false)



//-------------------CALL of API

async function getApi (e) {
e.preventDefault();
const url = 'https://iq-bible.p.rapidapi.com/GetAudioNarration?bookId=02&chapterId=003&versionId=kjv';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'edaae89300mshbb2ddde45808382p178b2cjsn7b04de6cb9db',
		'X-RapidAPI-Host': 'iq-bible.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}

}

//-----------------------Event Liistener

return (
  <h1>hello</h1>
)
}
