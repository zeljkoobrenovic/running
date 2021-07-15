import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  weekCount = 20;
  calendar = {};
  focus = ['strong core', 'light feet', 'not overstriding', 'leg speed', 'not rocking the arms', 'not rocking the shoulders', 'relaxed upper body', 'knee lift'];
  technique = ['Low upper <b>arms with bent elbows</b> slightly less than 90⁰',
    '<b>Light feet</b> especially during easy and long runs',
    'Not rocking <b>shoulders</b>',
    'Avoiding <b>excessive heel or forefoot striking</b>',
    'Good <b>posture and knee lift</b> especially during hills'];
  links = [{
    title: '5km training program, 12 weeks (SweatElite)',
    link: 'https://www.sweatelite.co/wp-content/uploads/2019/04/12-Week-5K-Training-Program-FINAL.pdf'
  }, {
    title: '10km training program, 12 weeks (SweatElite)',
    link: 'https://www.sweatelite.co/wp-content/uploads/2018/12/Elite-Training-Program-10k.pdf'
  }, {
    title: '10km training plan Elite, 12 weeks (Training4Endurance)',
    link: 'https://training4endurance.co.uk/running/10k-running-plans/10k-training-plan-elite/'
  }, {
    title: '21km training program, 16 weeks (SweatElite)',
    link: 'https://www.sweatelite.co/wp-content/uploads/2018/11/Sweat-Elite-Half-Marathon-Training-Program.pdf'
  }];
  advice = [
    {
      group: 'General',
      tips: [
        'The Kenyan Motto: Train Hard, Win Easy',
        'Ensure that you hydrate properly throughout the day',
        '“When aerobic running becomes a daily habit, strength & confidence follow” Arthur Lydiard',
        '“Progression is best made by increasing repetitions, rather than increasing the weight/load.” Seb Coe',
        '“Flexibility and stretching is a vital aspect of circuit and strength training.” Seb Coe',
        '“If I am still standing at the end of the race, hit me with a board and knock me down, because that means I didn’t run hard enough.” Steve Jones',
        '“We may train or peak for a certain race, but running is a lifetime sport.” Alberto Salazar',
        'A successful race day comes in the weeks and months prior, on the roads, trails, track, in the gym, at the dinner table and between the ears.',
        'AVERAGE pace is more important than CURRENT pace. Learn to flow with the run, the terrain, the route. Worry less about pace varying within your run. It will. Focus on average pace across the run.',
        'Nature is good medicine. And, there\'s no better way to take your medicine than by moving across the earth on two feet (sometimes quickly).',
        'Running shoes are your #1 piece of gear. Make sure you rotate several pairs so you have variety in foot plant and replace worn shoes after 300-400 miles.',
        'Rome wasn\'t built in a day and your fitness will take time as well. Be patient. Let fitness come to you. Never strain or press. Keep your paces within the recommended range and you can sit back, relax and look forward to a new you by the end of the plan.',
        'I saw the angel in the marble and carved until I set him free. Michelangelo',
        'A good mantra for workouts is last mile, best mile or last rep, best rep. This encourages control at the start and finishing fast - exactly what you should do in the race.'
      ]
    },
    {
      group: 'Easy Run',
      tips: [
        'Easy runs are important to develop your physiological systems.',
        'Easy runs are great for focusing on technique',
        'Easy runs are a time to chat with friends - develop a running culture and community where you live. Be like the Kenyans of Rift Valley',
        'Even as an elite athlete, Joyciline Jepkosgei’s easy runs are done at 5-6mins/km',
      ]
    },
    {
      group: 'Food',
      tips: [
        'Don\'t sabotage training w/ poor reward eating.',
      ]
    },
    {
      group: 'Rest',
      tips: [
        '"You can\'t cram for the final…the best thing you can do for your body is rest." Gordon Bloch',
        'The #1 mistake runners make is running too fast on easy days. Stick within the pace range to avoid overtraining and injury.',
        'Any idiot can train himself into the ground; the trick is working in training to get gradually stronger. Olympian Keith Brantley',
        'Stress + Rest = Progress. Obey this equation and your fitness will build steadily and predictably. Over stress/train and/or under rest/recover and you\'ll risk injury and burn out.',
      ]
    },
    {
      group: 'Sleep',
      tips: [
        'Sleep is one of the most powerful weapons of rest',
        'The easiest thing you can do to help your running is to get more sleep each night. Start going to bed 30 minutes earlier most nights for 1 month.',
      ]
    },
    {
      group: 'Motivation & Discipline',
      tips: [
        '“For an athlete, the biggest pressure comes from within. You know what you want to do & and what you’re capable of” Paula Radcliffe',
        '“It’s just a matter of understanding what’s necessary and discipline yourself to do it” Arthur Lydiard',
        'The road to success is paved with discipline, dedication and determination. Run by run. Week in. Week out.',
        'You are never too old to set another goal or to dream a new dream. C. S. Lewis',
        '“What day is it? asked Winnie the Pooh. It\'s today, squeaked Piglet. My favorite day, said Pooh.',
        'You must be ready to roll with the punches. Not every run, workout or race will go as planned. Short-term memory loss helps after those days.',
      ]
    },
    {
      group: 'Preventing Injuries',
      tips: [
        'Kenyans are good “at avoiding injury…when they were tired, they did not push; when they felt good they went flat out. When asked about their weekly mileage, they had no idea." Neil Scholdes',
        'Preventing injury is a more efficient process than rehabing an injury. Perform a prehab routine with core, stability, strength, balance and mobility 1-3 times per week to keep your body healthy.',
        'A common error runners make is ignoring aches and pains that are getting progressively worse. Don\'t deny it. Treat it, rest it, beat it!',
      ]
    }
  ];
  routines = [
    {
      name: 'Warming Up',
      icon: 'warming-up.png',
      description: 'Perform warming up before the following sessions: Intervals, Hill Repeats, Fartleks\n' +
        'and Tempo Runs.',
      steps: [
        {
          name: '10mins <b>easy run</b>.'
        },
        {
          name: '<b>Dynamic stretching</b> (not static).'
        },
        {
          name: '<b>Drills</b> – fosters muscle memory for good running technique. This\n' +
            'enables efficiency and prevents injury. Especially important in 5-10k\n' +
            'races characterised by high-impact workouts that otherwise makes\n' +
            'runners prone to injury.'
        },
        {
          name: '<b>Run throughs (aka strides)</b> - 50-80m at a fast pace. Focus on light feet,\n' +
            'good technique, posture and high turnover.'
        }
      ],
      videos: [
        {
          title: '5 Minutes Dynamic Stretching',
          by: 'MadFit',
          link: 'https://youtu.be/_sNRH65Wmuw',
          skipIntroLink: 'https://youtu.be/_sNRH65Wmuw?t=54'
        },{
          title: '10 Minutes Dynamic Stretching',
          by: 'MadFit',
          link: 'https://youtu.be/awBQVJ39sKM',
          skipIntroLink: 'https://youtu.be/awBQVJ39sKM?t=47'
        },
        {
          title: 'Why a Running Warmup Is Key to Your Success',
          by: 'Runner\'s World',
          link: 'https://www.runnersworld.com/beginner/a20811024/how-and-why-you-should-warm-up-before-a-run/'
        },
        {
          title: 'The 5-Minute Pre-Run Warmup You Can Do Before Every Run',
          by: 'Runner\'s World',
          link: 'https://www.runnersworld.com/training/a20865088/pre-run-warmup/'
        }
      ]
    },
    {
      name: 'Cooling Down',
      icon: 'cooling-down.png',
      description: 'Perform cooling down after any training session.',
      steps: [
        {
          name: '5 mins <b>easy run</b>.',
          durations: ''
        },
        {
          name: '<b>Static stretching</b> - helps you stay flexible and prevent muscle-related\n' +
            'injuries.'
        }
      ],
      videos: [
        {
          title: 'How to stretch after a run',
          by: 'NHS.uk',
          link: 'https://www.nhs.uk/live-well/exercise/how-to-stretch-after-a-run/'
        },
        {
          title: '5 Minutes Cooling Down',
          by: 'MadFit',
          link: 'https://youtu.be/wo1uEoy9MwU?t=55',
          skipIntroLink: 'https://youtu.be/wo1uEoy9MwU?t=55'
        },
      ]
    },
    {
      name: 'Strength Trainings',
      icon: 'strength.png',
      description: 'Functional strength training, rather than very heavy weight sessions. ' +
        'They include light weights and plyometric activities for the core and leg muscles. ' +
        'Aim for 2-3 sessions per week. Physiotherapist-recommended hip stability exercises include single leg ' +
        'bridges, fire-hydrants, hip external rotations & sit-to-stands. To strengthen ' +
        'lower-limb tendons, perform 50 single-leg calf raises on each side, daily. Benefits of these sessions include ' +
        'injury prevention, enhancing strength and power, improvements in running technique',
      steps: [],
      videos: [
        {
          title: 'Legs: 20 Minutes Workout',
          by: 'MadFit',
          link: 'https://youtu.be/Zj35W6rE8ek',
          skipIntroLink: 'https://youtu.be/Zj35W6rE8ek?t=82'
        },
        {
          title: 'Legs: 10 Minutes Workout',
          by: 'MadFit',
          link: 'https://youtu.be/zbt1g9WX6bA',
          skipIntroLink: 'https://youtu.be/zbt1g9WX6bA?t=58'
        },
        {
          title: 'Legs: 15 Minutes Workout #1',
          by: 'MadFit',
          link: 'https://youtu.be/HVyt7ywsOQ8',
          skipIntroLink: 'https://youtu.be/HVyt7ywsOQ8?t=53'
        },
        {
          title: 'Legs (Thights): 15 Minutes Workout #2',
          by: 'MadFit',
          link: 'https://youtu.be/8FA8v1BhPQE',
          skipIntroLink: 'https://youtu.be/8FA8v1BhPQE?t=45'
        },
        {
          title: 'Upper Body: 10 Minutes Workout',
          by: 'MadFit',
          link: 'https://youtu.be/alvaQZjxY_Y',
          skipIntroLink: 'https://youtu.be/alvaQZjxY_Y?t=51'
        },
        {
          title: 'Upper Body: 12 Minutes Workout (Intense Shoulders, Back, Chest & Arms)',
          by: 'MadFit',
          link: 'https://youtu.be/B3Y5kYDH-Mo',
          skipIntroLink: 'https://youtu.be/B3Y5kYDH-Mo?t=57'
        },
        {
          title: 'Upper Body: 15 Minutes Workout (Back, Arms, Shoulders & Chest)',
          by: 'MadFit',
          link: 'https://youtu.be/oOEgcLUfmj8',
          skipIntroLink: 'https://youtu.be/oOEgcLUfmj8?t=49'
        },
        {
          title: 'Upper Body: 15 Minutes Workout (Tone & Sculpt)',
          by: 'MadFit',
          link: 'https://youtu.be/0zhvUV1bAVQ',
          skipIntroLink: 'https://youtu.be/0zhvUV1bAVQ?t=44'
        },
        {
          title: 'Core: 10 Minutes #1',
          by: 'MadFit',
          link: 'https://youtu.be/svdPTfOpAyQ',
          skipIntroLink: 'https://youtu.be/svdPTfOpAyQ?t=34'
        },
        {
          title: 'Core: 10 Minutes #2',
          by: 'MadFit',
          link: 'https://youtu.be/3GZ5wcXMhcM',
          skipIntroLink: 'https://youtu.be/3GZ5wcXMhcM?t=204'
        },
        {
          title: 'Core: 15 Minutes #1',
          by: 'MadFit',
          link: 'https://youtu.be/Oa-xdUN3x08',
          skipIntroLink: 'https://youtu.be/Oa-xdUN3x08?t=83'
        },
        {
          title: 'Core: 20 Minutes #1',
          by: 'MadFit',
          link: 'https://youtu.be/3GZ5wcXMhcM',
          skipIntroLink: 'https://youtu.be/3GZ5wcXMhcM?t=202'
        },
        {
          title: 'Core: 20 Minutes #2',
          by: 'MadFit',
          link: 'https://youtu.be/vii9pLg-9to',
          skipIntroLink: 'https://youtu.be/vii9pLg-9to?t=35'
        },
        {
          title: 'Core: 20 Minutes #2',
          by: 'MadFit',
          link: 'https://www.youtube.com/watch?v=8AAmaSOSyIA',
          skipIntroLink: 'https://www.youtube.com/watch?v=8AAmaSOSyIA&t=42'
        }
      ]
    },
    {
      name: 'Stretching Routines',
      icon: 'stretching.png',
      description: '“Flexibility and stretching is a vital aspect of circuit and strength training.” Seb Coe',
      steps: [],
      videos: [
        {
          title: '15 Minutes Strech Routine',
          by: 'MadFit',
          link: 'https://youtu.be/PhJAAp9v2N0',
          skipIntroLink: 'https://youtu.be/PhJAAp9v2N0?t=69'
        },
        {
          title: '30 Minutes Strech Routine',
          by: 'MadFit',
          link: 'https://youtu.be/qULTwquOuT4',
          skipIntroLink: 'https://youtu.be/qULTwquOuT4?t=121'
        },
        {
          title: '20 Minutes Lower Body Stretch (Hamstrings, Butt, & Hips)',
          by: 'MadFit',
          link: 'https://youtu.be/FN_X-WHcMF4',
          skipIntroLink: 'https://youtu.be/FN_X-WHcMF4?t=46'
        },
      ]
    }
  ];
  types = [
    {
      name: 'Runs',
      types: [
        {
          name: 'Long Run ',
          icon: 'long.png',
          aerobicEndurance: 'Aerobic Endurance',
          anaerobicThreashold: '',
          strength: '',
          speed: '',
          elasticity: '',
          recovery: '',
          description: 'Focus on developing your endurance and aerobic system. The ' +
            'pace requires more effort than an easy run and is similar to a steady run. ' +
            'Hypothetically, it would be moderately difficult to sustain  conversations on a long run.',
          examples: ['50min', '55min', '60min', '65min', '70min', '75min', '80min', '90min', '105min']
        },
        {
          name: 'Steady Run',
          icon: 'steady.png',
          aerobicEndurance: 'Aerobic Endurance',
          anaerobicThreashold: '',
          strength: 'Functional Strength',
          speed: '',
          speedControl: 'Speed Control',
          elasticity: '',
          recovery: '',
          description: 'A steady run is one that feels comfortable but purposeful pace. The steady run helps teach your body economy, and also familiarises you with the speed you should set off if doing a marathon come race day (if that\'s what you are training for). If possible, conduct these on undulating (rolling) hills. Hills serve as natural resistance to  strengthen your legs. These rolling hills will also enable your heart rate to rise  and fall at lower speeds.',
          link: 'https://strengthrunning.com/2016/04/a-step-by-step-guide-to-tempo-runs/',
          examples: ['30min', '35min', '40min', '45min', '50min', '55min', '60min', '70min', '80min'],
        },
        {
          name: 'Progression Run',
          icon: 'progression.png',
          aerobicEndurance: 'Aerobic Endurance',
          anaerobicThreashold: '',
          strength: 'Functional Strength',
          speed: '',
          speedControl: 'Speed Control',
          elasticity: '',
          recovery: '',
          description: 'A progression run is any run in which you begin slowly and gradually increase your pace to finish faster than you started.',
          link: 'https://www.podiumrunner.com/training/advance-your-fitness-with-progression-runs/',
          examples: ['70min (last 10min strong)', '80min (last 10min strong)', '90min (last 10min strong)'],
        },
        {
          name: 'Tempo Run (Sustained)',
          icon: 'tempo.png',
          aerobicEndurance: '',
          anaerobicThreashold: 'Anaerobic Threashold',
          strength: '',
          speed: '',
          elasticity: '',
          recovery: '',
          warmUp: true,
          description: 'Tempo runs are performed at a pace which is the ‘sweet spot’ between the ' +
            'aerobic/anaerobic transition points (comfortably hard, the pace you could race for an hour, 85-90% of maximum heart rate). \n\nSustained Tempo Run workout includes one block of running at tempo pace. That might be 20 minutes or 3 miles but there’s no break or recovery in the middle of the effort. A simple example is a workout like this: 7 miles with miles 3-5 at tempo pace. Here you have a 7-mile run with the middle 3 miles at tempo. Sustained tempo runs should be capped at roughly 40 minutes – any longer and the effort becomes too difficult, bordering on a race effort.',
          link: 'https://strengthrunning.com/2016/04/a-step-by-step-guide-to-tempo-runs/',
          examples: [
            '20min continuous tempo',
            '30min continuous tempo'
          ]
        },
        {
          name: 'Tempo Run (Repetitions)',
          icon: 'tempo.png',
          aerobicEndurance: '',
          anaerobicThreashold: 'Anaerobic Threashold',
          strength: '',
          speed: '',
          elasticity: '',
          recovery: '',
          warmUp: true,
          description: 'Tempo runs are performed at a pace which is the ‘sweet spot’ between the ' +
            'aerobic/anaerobic transition points (comfortably hard, the pace you could race for an hour, 85-90% of maximum heart rate). \n\nTempo repetitions workout is similar to intervals except they’re done at your tempo pace. The recovery is kept to a short 60-90 seconds and the repetitions are generally longer. An example is 10k: 3 x 1600m at tempo pace with 90sec jog recovery. This workout is very similar to the sustained tempo mentioned above except we’re including a short recovery after each tempo mile. Repetitions at tempo pace can be run slightly faster than tempo pace since the recovery will help clear more lactate. Though it’s best to pace yourself conservatively rather than too fast.',
          examples: [
            '[2 x 10min] + [1 x 5min], p 2min',
            '15, 10, 5min, p 2m',
            '20, 15min, p 2m',
            '2 x 2.5km, p 90s',
            '3 x 12min',
            '2 x 20min',
            '15min, 10min, 10min, 5min, 5min',
            '2 x 4m | 3×3m | 4×3m | 5x1m, p1 min',
            '2 x [10 x 1min], p30s/2m',
            '10 x 3min, p60s'
          ]
        },
        {
          name: 'Fartlek',
          icon: 'fartleks.png',
          warmUp: true,
          aerobicEndurance: 'Aerobic Endurance',
          anaerobicThreashold: 'Anaerobic Threashold',
          strength: '',
          speed: 'Speed',
          speedControl: 'Speed Control',
          elasticity: '',
          recovery: '',
          description: 'The word “fartlek” is a Swedish term which means “speed play.” It is a training method that blends continuous (endurance) training with interval (speed) training. Fartlek runs challenge the body to adapt to various speeds, conditioning you to become faster over longer distances.',
          examples: ['3 x 1min/2min/1min/2min/1min (60s recovery jog)',
            '6 x 2min surges (1min recovery jog) 2) strides 6 x 30s hard (30s walk recovery)', 'Fartlek pyramids 1/2/3/4/5/4/3/2/1 ' +
            'mins (1/2/3/3/3/3/3/2/1 mins recovery jog) 5-10k race pace']
        },
        {
          name: 'Hill Repeats',
          icon: 'hills.png',
          warmUp: true,
          aerobicEndurance: '',
          anaerobicThreashold: 'Anaerobic Threashold',
          strength: 'Functional Strength',
          speed: '',
          elasticity: '',
          recovery: '',
          description: 'Find a place where there is a consistently moderate incline which stretches ' +
            'out for at least 500m or so. Hard effort uphill, easy jog downhill. ' +
            'In addition to its strength-related benefits, the hills also encourage correct ' +
            'running posture and form. Watch out for good technique including: head up, ' +
            'shoulders relaxed, hips up, knees up, running on the front half of your foot in a ratio of 60:40. ' +
            'Your arms should be driving your knee drive. Where possible, ' +
            'try to remain relaxed as the fatigue mounts up. ' +
            'If you like, you may vary up these hill sessions with some steep hill running, ' +
            'hill bounding or hill springing. This session stimulates the stress-recovery response so it’s necessary to make ' +
            'sure you take it super easy the next day.',
          examples: ['6 x 3min', '6 x 90s steeper hill', '35min steady run in hills'],
        },
        {
          name: 'Races',
          icon: 'race.png',
          aerobicEndurance: 'Aerobic Endurance',
          anaerobicThreashold: 'Anaerobic Threashold',
          strength: 'Functional Strength',
          speed: 'Speed',
          speedControl: 'Speed Control',
          elasticity: '',
          recovery: '',
          description: 'Focus on developing your endurance and aerobic system. The ' +
            'pace requires more effort than an easy run and is similar to a steady run (@ ' +
            'RPE 5). Hypothetically, it would be moderately difficult to sustain ' +
            'conversations on a long run.',
          examples: ['3km', '5km', '10km', '15km', '16min', '21km']
        },
        {
          name: 'Recovery/Easy Runs',
          icon: 'recovery.png',
          aerobicEndurance: 'Aerobic Endurance',
          anaerobicThreashold: '',
          strength: '',
          speed: '',
          elasticity: '',
          recovery: 'Recovery',
          description: 'Very easy running! Note that this is different to total rest*: easy running ' +
            'stimulates the gentle flow of blood toxins to the liver, eliminating the acidosis ' +
            'and restoring the body to ‘neutral’. Failure to remove any mounting and ' +
            'prolonged acidosis will otherwise damage your body’s enzymes, muscles and red blood cells.' +
            '(Rest is also critical to your recovery and injury prevention efforts, so don\'t ' +
            'ignore rest days. Here muscles are repairing microtears and building them to ' +
            'be stronger – i.e. stress-induced regeneration.)',
          examples: ['20min light recovery', '30min', '35min', '40min', '45min', '50min']
        },
      ]
    },
    {
      name: 'Speedwork',
      types: [
        {
          name: 'Intervals',
          icon: 'intervals.png',
          warmUp: true,
          aerobicEndurance: 'Aerobic Endurance',
          anaerobicThreashold: 'Anaerobic Threashold',
          strength: '',
          speed: 'Speed',
          elasticity: '',
          recovery: '',
          description: 'Short, intense efforts followed by equal or slightly longer recovery time. The interval should be performed at an effort in which you&rsquo;re in the red (think: reaching hard for air, unable to hold a conversation, and counting the seconds until you can stop). It should be a controlled, fast effort followed by a truly easy jog. \n\nInterval training is a type of training that involves a series of high intensity workouts interspersed with rest or relief periods. The high-intensity periods are typically at or close to anaerobic exercise, while the recovery periods involve activity of lower intensity. ',
          link: 'https://en.wikipedia.org/wiki/Interval_training',
          examples: [
            '6 x 400m p400m',
            '4 x 800m, p60s',
            '8 x [400m, 200m], p200m',
            '6 x 1km, p60s',
            '4 x 1.5km, p75s',
            '3 x [900m | 700m | 500m], p100/sp300',
            '5 x 1000m, p300m',
            '4-5 x [300m | 600m], p300m',
            '4-5 x [400m | 800m], p200m',
            '7-9 x 800 meter, p60s each 800m 3s faster',
            '3-4 x [4 x 300m], p100m/sp300m',
            '3-4 x [5 x 400m], p100m/sp300m',
            '3-4 x [5 x 300m], p100m/sp300m',
            '2 x [10 x 200m], p200m/sp400m'
          ]
        },
        {
          name: 'Glycolytic (Lactic) Repetitions',
          icon: 'sprint.png',
          warmUp: true,
          aerobicEndurance: 'Aerobic Endurance',
          anaerobicThreashold: 'Anaerobic Threashold',
          strength: '',
          speed: 'Speed',
          elasticity: '',
          recovery: '',
          description: 'The shorter, snappier and more intense cousin of intervals. This is designed ' +
            'to get your legs used to extreme fatigue from local (i.e. confined to the legs) ' +
            'acidosis. It is important not to exhaust this system on back-to-back days. ' +
            'Doing so will come the expense of significant aerobic capacity, as it may ' +
            'recruit destructive enzymes that can rupture your cell membranes resulting ' +
            'in protein leakage and capillary damage. ' +
            'These sessions are often completed at 10k, 5k, or 3k goal pace @ RPE 9-10.',
          examples: ['4x40m, 4x50m, 4x60m']
        }
      ]
    },
    {
      name: 'Other',
      types: [
        {
          name: 'Functional Strength',
          icon: 'strength.png',
          aerobicEndurance: '',
          anaerobicThreashold: '',
          strength: 'Functional Strength',
          speed: '',
          elasticity: '',
          recovery: '',
          description: 'Functional strength training, rather than very heavy weight sessions. ' +
            'They include light weights and plyometric activities for the core and leg muscles. ' +
            'Aim for 2-3 sessions per week. Physiotherapist-recommended hip stability exercises include single leg ' +
            'bridges, fire-hydrants, hip external rotations & sit-to-stands. To strengthen ' +
            'lower-limb tendons, perform 50 single-leg calf raises on each side, daily. Benefits of these sessions include ' +
            'injury prevention, enhancing strength and power, improvements in running technique',
          examples: ['legs', 'core', 'upper body']
        },
        {
          name: 'Stretching',
          icon: 'stretching.png',
          aerobicEndurance: '',
          anaerobicThreashold: '',
          strength: '',
          speed: '',
          elasticity: 'Elasticity',
          recovery: 'Recovery',
          description: '',
          examples: ['15min', '20min', '30min']
        },
        {
          name: 'Cross-Training (CT)',
          icon: 'bike.png',
          aerobicEndurance: '',
          anaerobicThreashold: '',
          strength: 'Functional Strength',
          speed: '',
          elasticity: '',
          recovery: 'Recovery',
          description: 'CT allows sufficient rest to muscles, joints, bones while maintaining aerobic fitness. ' +
            'E.g., this is perfect after long runs. Swimming, biking, or using ellipticals at a moderate intensity level is ideal.'
        },
        {
          name: 'Rest',
          icon: 'rest.png',
          aerobicEndurance: '',
          anaerobicThreashold: '',
          strength: '',
          speed: '',
          elasticity: '',
          recovery: 'Recovery',
          description: '  '
        }
      ]
    }
  ];
  examples = {
    '10k': {
      blocks: [
        {
          name: '',
          weeks: [
            {}
          ]
        }
      ]
    }
  };

  develop = [
    {
      name: 'Aerobic Endurance',
      description: 'Gradually build your aerobic endurance leading to ' +
        'physiological adaptations such as a more diverse capillary network, and ' +
        'increased myoglobin and mitochondrial content. Running easy is the best way to train the aerobic system! More: https://www.sweatelite.co/aerobic-running/'
    },
    {
      name: 'Strength',
      description: ''
    },
    {
      name: 'Speed',
      description: 'Characterised by quick and faster repetitions.'
    },
    {
      name: 'Recovery',
      description: 'recoverying is the art of finding the right balance of cutting back mileage to be ' +
        'rested and ready while maintaining peak form. Typically, a short easy run ' +
        'occurs on pre-race day to stay loose and relaxed. Concentrate on fast leg turnover, ‘light’ feet, peak optimal body form, ' +
        'maintaining good technique and feeling fresh.'
    },
    {
      name: 'Elasticity',
      description: 'Stretching'
    }
  ];

  constructor() {
    this.prepareCalendar();
    this.read();
    this.save();
  }

  days(): any {
    return ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  }


  prepareCalendar(): void {
    for (let week = 1; week <= this.weekCount; week++) {
      this.days().forEach(day => {
        this.calendar['Week_' + week + '_' + day] = this.newDayInfo();
        this.calendar['Typical_' + week + '_' + day] = this.newDayInfo();
      });
    }
  }

  private newDayInfo(): any {
    return {
      option1: {
        training: {},
        example: '',
        focus: ''
      },
      option2: {
        training: {},
        example: '',
        focus: ''
      }

    };
  }

  save(): void {
    const localStorage = window.localStorage;
    if (localStorage) {
      localStorage.setItem('running_calendar', JSON.stringify(this.calendar));
    }
  }

  reset(): void {
    this.prepareCalendar();
    this.save();
  }

  read(): void {
    const localStorage = window.localStorage;
    if (localStorage) {
      const json = localStorage.getItem('running_calendar');
      if (json) {
        this.calendar = JSON.parse(json);
      }
    }
  }

  example(id): void {
    this.prepareCalendar();
    this.save();
  }
}
