import streamlit as st
import whisper
import openai
from audiorecorder import audiorecorder
import magic
import os
import re

# Define a function to generate TTS voices using the Web Speech API
def generate_voice(text, voice):
    # Define the JavaScript code to generate the voice
    js_code = f"""
        const synth = window.speechSynthesis;
        const utterance = new SpeechSynthesisUtterance("{text}");
        utterance.voice = speechSynthesis.getVoices().filter((v) => v.name === "{voice}")[0];
        synth.speak(utterance);
    """
    # Use the components module to embed the JavaScript code in the web page
    st.components.v1.html(f"<script>{js_code}</script>", height=0)


def get_audio_record_format(orgfile):
    info = magic.from_file(orgfile).lower()
    print(f'\n\n Recording file info is:\n {info} \n\n')
    if 'webm' in info:
        return '.webm'
    elif 'iso media' in info:
        return '.mp4'
    elif 'wave' in info:
        return '.wav'
    else:
        return '.mp4'


class Conversation:
    def __init__(self, engine):
        self.engine = engine
    def generate_response(self, message):
        response = openai.Completion.create(
            engine=self.engine,
            prompt=message,
            max_tokens=1024,
            n=1,
            stop=None,
            temperature=0.2,
            presence_penalty=0.6,
            frequency_penalty=0.6
        )
        return response.choices[0].text


@st.cache  # Decorator to cache heavy setups
def init_load_setups():
    # setup asr engine
    asrmodel = whisper.load_model('base', download_root='asrmodel' )
    # setup chatGPT instance
    openai.api_key = "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"
    conversation = Conversation(engine="text-davinci-003")
    # load tts voices and language code mapping
    ttsVoices = {}
    for line in open('language-tts-voice-mapping.txt', 'rt').readlines():
        if len(line.strip().split(',')) == 3:
            language, langCode, voiceName = line.strip().split(',')
            ttsVoices[langCode.strip()] = voiceName.strip()
    return asrmodel, conversation, ttsVoices


# main voice chat app 
def app():
    # # Put expensive initialize computation here
    # st.title("LinguaLink")
    # st.subheader("Enchance your Language Skills")

    st.set_page_config(layout="wide")
    st.markdown(
        """
        <style>
        .stApp {
            max-width: 1200px;
            margin: 0 auto;
        }
        </style>
        """,
        unsafe_allow_html=True,
    )

    # Define background image
    st.markdown(
        """
        <style>
        body {
            background-color: #b72ab7;
            
            background-size: cover;
            
        }
        </style>
        """,
        unsafe_allow_html=True,
    )

    # Page header
    st.markdown("# Practice Session")
    # st.markdown("#### ")

    # st.markdown("![Alt Text](https://img.freepik.com/premium-photo/blur-background-empty-modern-office-background-city-center-workspace-interior-design_31965-68174.jpg)")
    # st.markdown(
    #     """
    #     <div style="text-align:center" >
    #         ![Alt Text](https://img.freepik.com/premium-photo/blur-background-empty-modern-office-background-city-center-workspace-interior-design_31965-68174.jpg)
    #     </div>
    #     """
    # )










    # get initial setup
    asr, chatgpt, ttsVoices = init_load_setups()

    # recorder 
    audio = audiorecorder("Tap to start recording", "Recording... (tap to stop recording)")
    
    ##########################################################
    st.image("./man4.png", use_column_width=True)

    if len(audio) > 0:
        # To play audio in frontend:
        st.audio(audio.tobytes())
        # To save audio to a file:
        audioname='recording.tmp'
        with open( audioname, "wb") as f:
            f.write(audio.tobytes())
        ## get record file formate based on file magics
        recordFormat = get_audio_record_format(audioname)
        os.rename(audioname, audioname + recordFormat )

        st.markdown("<b>Chats:</b> ", unsafe_allow_html=True)

        with st.spinner("Recognizing your voice ..."):
            asr_result = asr.transcribe( audioname + recordFormat )
            text = asr_result["text"]
            # languageCode = asr_result["language"]
            languageCode = "en"
            print(asr_result["language"])
            st.markdown("<b>You:</b> " + text, unsafe_allow_html=True)
            print('ASR result is:' + text)

        st.write('')

        with st.spinner("Getting response for you ..."):
            newText = "consider you are a human friend of mine and we are having a normal conversation, please respond to what I say accordingly and try to extend conversation: \n\n" + text
            # newText = "consider I want to improve my language skills and for this purpose we are having a normal human conversation, please respond accordingly and try to extend conversation: \n\n" + text
            response = chatgpt.generate_response(newText)
            st.markdown("<b>Friend:</b> " + response, unsafe_allow_html=True)
            print('Friend response is: '   + response)
            spokenResponse = re.sub(r'\s+', ' ', response)
            spokenResponse = spokenResponse.lstrip().rstrip()
            #Speak the input text
            generate_voice(spokenResponse, ttsVoices[languageCode])


if __name__ == "__main__":
    app()
