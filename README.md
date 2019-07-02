
![vexbot](https://user-images.githubusercontent.com/212941/59231505-bb48a900-8b95-11e9-9ed0-acd620feaf76.png)

# 👋 Meet Vexbot

Ah, Vexbot. She's not really vexing—she just wants to keep everything in a straight line. And that's all she can talk about. Straight lines.

With every request, Vexbot will send you up to a thousand lines—two pairs of coordinates and a speed.

## ↗ What can you do?

Just lines? That seems pretty boring...

Sure, you could just draw one line...

![single-line](https://user-images.githubusercontent.com/212941/58451645-2475ea00-80c9-11e9-9823-80732512dcac.png)

But when you draw a thousand it starts to get interesting...

![many-lines](https://user-images.githubusercontent.com/212941/58451643-2475ea00-80c9-11e9-846f-7dfba6fc1182.png)

And when you start layering them...

![lines-buildup](https://user-images.githubusercontent.com/212941/58450916-12467c80-80c6-11e9-95ca-ade8288500a4.gif)

Or you could ask the nice Vexbot to connect all the lines for you...

![connected-lines](https://user-images.githubusercontent.com/212941/58451245-86355480-80c7-11e9-9fb7-72d1429b1a5c.png)

And we haven't even gotten into what happens when you animate lines individually...

What's next? That's up to you!

## ✨ A few ideas
There are millions of things you can do with Vexbot, but here are a few ideas to get you started:

- **Bring it to life:** With the connected parameter turned on, our little Vexbot gives you a thousand-jointed creature you can have wriggle across your screen.
- **Pickup Sticks:** Ever play the [game](https://en.wikipedia.org/wiki/Pick-up_sticks)? Now's your chance to build it.
- **Don't touch the lines:** Add a hero whom you navigate around the lines to a destination.

Have an idea of your own? Create an issue and we'll add it to the list!

## 🤖 API basics

You can request up to 1,000 pairs of coordinates, specify the magnitude and whether you want your lines connected, and set maximum *x* and *y* boundaries.

There's a single endpoint: `api.noopschallenge.com/vexbot`

The endpoint accepts five parameters, all optional:

- **count** *(optional, numeric)*: Between 1 and 1000. Number of lines to return.
- **magnitude** *(optional, numeric)*: Between 1 and 100,000. Maximum length of lines.
- **connected** *(optional, numeric boolean)*: 1 or 0. If `connected===1`, then the `b` coordinate of each line will be the `a` coordinate of the next.
- **width** *(optional, numeric)*: Between 10 and 100,000. Maximum width of returned points.
- **height** *(optional, numeric)*: Between 10 and 100,000. Maximum height of returned points.

The endpoint returns a JSON object with an array named `vectors` of *n* length. Each item in the `vectors` has three properties: `a`, `b`, and `speed`.

Example return for a single line:

```
{
  "vectors": [
    {
      "a": {
        "x": 743,
        "y": 147
      },
      "b": {
        "x": 60,
        "y": 601
      },
      "speed": 71
    }
  ]
}
```

Complete API documentation: [API.md](./API.md)

More about Vexbot here: https://noopschallenge.com/challenges/vexbot
