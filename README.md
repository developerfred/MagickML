<p align="center"><img src="files/logo.png" /></p>
<h1 align="center">MAGICK ML</h1>

Magick is a visual IDE for no-code data pipelines and multimodal agents. Magick can connect to other services and comes with nodes and connectors well-suited for intelligent agents, chatbots, complex reasoning systems and realistic characters.

## Key Features

- Powerful graph-based IDE for complex data pipelines
- Realtime agents which can perform actions on their own, interact with users and other agents in different modalities with a unified memory and self
- Social connectors to Discord, Twitter and Twilio -- Zoom, Google Meet, Reddit, Slack connectors will be available soon as plugins!
- Search Google, Wikipedia and the Semantic Web
- Many included powertools, including voice and image generation and vector search
- Graphs can be embedded in subgraphs and shared for rapid community development

![image](https://user-images.githubusercontent.com/18633264/210928740-fec448aa-e6fe-4640-9587-aae109ddea12.png)

## Getting Started

### Prerequisites

You will need **Node.js 18 or higher**. You may need to install `xvfb, chromium and ffmpeg` for features like browser integration and text to speech. For speech, search and image generation serverss, you will need Docker (or it will make your life much easier).

### Installation

First, clone and set up Magick

```
git clone https://github.com/Oneirocom/MagickML
```

Next, install dependencies

```
yarn install
```

Now, copy the `.env` file and rename it to `.env.local` -- you can store secrets and environment variables here. This is git ignored but make sure you don't accidentally reveal this in your public repo! The minimum you will need to get started is an OpenAI key.

## Starting the database
We use Prisma, which is really flexible. You can set your own connection string later, but to get started we've provided a docker container you can run.

First, make sure you have docker installed and running. We recommend the Docker Desktop app which you can find [here](https://docs.docker.com/get-docker/).

Next, start the containers
```
yarn containers
```

# Run the apps
```
yarn apps
```

## Apache license information

Good example here for formatting apache license files for reference.
https://www.openntf.org/Internal/home.nsf/dx/Applying_Apache_License
