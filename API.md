## Vexbot

### Get a single vector

`GET /vexbot`

`HTTP 200`

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


### Get multiple vectors

`GET /vexbot?count=5`

`HTTP 200`

```
{
  "vectors": [
    {
      "a": {
        "x": 720,
        "y": 894
      },
      "b": {
        "x": 686,
        "y": 748
      },
      "speed": 30
    },
    {
      "a": {
        "x": 744,
        "y": 514
      },
      "b": {
        "x": 505,
        "y": 948
      },
      "speed": 4
    },
    {
      "a": {
        "x": 109,
        "y": 8
      },
      "b": {
        "x": 935,
        "y": 949
      },
      "speed": 91
    },
    {
      "a": {
        "x": 618,
        "y": 442
      },
      "b": {
        "x": 428,
        "y": 437
      },
      "speed": 31
    },
    {
      "a": {
        "x": 815,
        "y": 647
      },
      "b": {
        "x": 918,
        "y": 168
      },
      "speed": 63
    }
  ]
}
```


### Constrain vector to bounds

`GET /vexbot?count=4&width=10&height=10`

`HTTP 200`

```
{
  "vectors": [
    {
      "a": {
        "x": 7,
        "y": 2
      },
      "b": {
        "x": 6,
        "y": 4
      },
      "speed": 41
    },
    {
      "a": {
        "x": 4,
        "y": 9
      },
      "b": {
        "x": 3,
        "y": 0
      },
      "speed": 95
    },
    {
      "a": {
        "x": 0,
        "y": 0
      },
      "b": {
        "x": 7,
        "y": 1
      },
      "speed": 27
    },
    {
      "a": {
        "x": 1,
        "y": 1
      },
      "b": {
        "x": 4,
        "y": 2
      },
      "speed": 80
    }
  ]
}
```


### Require vectors to connect

`GET /vexbot?count=4&connected=1`

`HTTP 200`

```
{
  "vectors": [
    {
      "a": {
        "x": 77,
        "y": 304
      },
      "b": {
        "x": 560,
        "y": 35
      },
      "speed": 85
    },
    {
      "a": {
        "x": 560,
        "y": 35
      },
      "b": {
        "x": 827,
        "y": 886
      },
      "speed": 21
    },
    {
      "a": {
        "x": 827,
        "y": 886
      },
      "b": {
        "x": 788,
        "y": 722
      },
      "speed": 93
    },
    {
      "a": {
        "x": 788,
        "y": 722
      },
      "b": {
        "x": 491,
        "y": 525
      },
      "speed": 82
    }
  ]
}
```


### Change magnitude of vectors

`GET /vexbot?count=4&magnitude=4`

`HTTP 200`

```
{
  "vectors": [
    {
      "a": {
        "x": 495,
        "y": 198
      },
      "b": {
        "x": 492,
        "y": 196
      },
      "speed": 14
    },
    {
      "a": {
        "x": 819,
        "y": 833
      },
      "b": {
        "x": 817,
        "y": 832
      },
      "speed": 49
    },
    {
      "a": {
        "x": 51,
        "y": 9
      },
      "b": {
        "x": 50,
        "y": 10
      },
      "speed": 84
    },
    {
      "a": {
        "x": 582,
        "y": 812
      },
      "b": {
        "x": 584,
        "y": 813
      },
      "speed": 73
    }
  ]
}
```