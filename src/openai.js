// const { Configuration, OpenAIApi } = require('openai');

// const API_KEY = process.env.REACT_APP_OPENAI_API_KEY;

// const configuration= new Configuration({ apiKey: API_KEY });
// const openai = new OpenAIApi(configuration);

// export async function sendMsgToOpenAI(message) {
//     const res = await openai.createCompletion({
//         model: 'gpt-3.5-turbo',
//         prompt: message,
//         temperature: 0.7,
//         max_tokens: 256,
//         top_p: 1,
//         frequency_penalty: 0,
//         presence_penalty: 0
//     });

//     return res.data.choices[0].text;
// }

import { OpenAI } from 'openai';

const API_KEY = process.env.REACT_APP_OPENAI_API_KEY;

const openai = new OpenAI({
  apiKey: API_KEY,
  dangerouslyAllowBrowser: true
});


console.log('API_KEY:', API_KEY);

export async function sendMsgToOpenAI(message) {
  const res = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [{ role: 'user', content: message }],
  });
  return res.choices[0].message.content;
}
