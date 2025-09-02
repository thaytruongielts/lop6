document.addEventListener('DOMContentLoaded', () => {
    const vocabData = {
        'Unit 1 - Animals': {
            'dragDrop': {
                'sentence': 'I love watching the colourful... fly from flower to flower.',
                'correctWord': 'butterfly',
                'wordBank': ['camel', 'butterfly', 'snake']
            },
            'mysteryBox': ['camel', 'butterfly', 'snake', 'identifying things', 'sentence stress']
        },
        'Unit 2 - School': {
            'dragDrop': {
                'sentence': 'I love studying... to learn about the past.',
                'correctWord': 'history',
                'wordBank': ['english', 'history', 'science']
            },
            'mysteryBox': ['english', 'history', 'talking about school subjects', 'identifying the writer’s opinion']
        },
        'Unit 3 - Food': {
            'dragDrop': {
                'sentence': 'I often eat a juicy... for lunch.',
                'correctWord': 'burger',
                'wordBank': ['burger', 'salad', 'meat']
            },
            'mysteryBox': ['burger', 'salad', 'meat', 'organising and remembering vocabularies', 'likes and dislikes']
        },
        'Unit 4 - Sports': {
            'dragDrop': {
                'sentence': 'My favourite sport to play is...',
                'correctWord': 'football',
                'wordBank': ['football', 'athletics', 'cycling']
            },
            'mysteryBox': ['football', 'athletics', 'cycling', 'talking about sports', 'The Olympics then and now']
        },
        'Unit 5 - Grammar': {
            'dragDrop': {
                'sentence': 'He... to school every day. (walk)',
                'correctWord': 'walks',
                'wordBank': ['walks', 'walked', 'walking']
            },
            'mysteryBox': ['superlative adjectives', 'present continuous', 'regular and irregular verbs']
        },
        'Unit 6 - Health': {
            'dragDrop': {
                'sentence': 'You must drink... of water every day to stay hydrated.',
                'correctWord': 'a lot of',
                'wordBank': ['some', 'any', 'a lot of']
            },
            'mysteryBox': ['countable and uncountable nouns', 'some, any, much, many', 'understanding specific information in interviews about health']
        },
        'Unit 7 - Past Tense': {
            'dragDrop': {
                'sentence': '... a lot of people at the party last night?',
                'correctWord': 'Were there',
                'wordBank': ['Was there', 'Were there', 'There was']
            },
            'mysteryBox': ['there was(n\'t)', 'there were(n\'t)', 'regular and irregular verbs']
        },
        'Unit 8 - Reading Skills': {
            'dragDrop': {
                'sentence': 'I\'m learning... an interesting text about Sumo wrestlers.',
                'correctWord': 'summarising',
                'wordBank': ['summarising', 'understanding', 'reading']
            },
            'mysteryBox': ['short and long vowels', 'Sumo wrestlers summarising a text']
        },
        'Unit 9 - Music': {
            'dragDrop': {
                'sentence': 'She can play the... and sing a song at the same time.',
                'correctWord': 'guitar',
                'wordBank': ['guitar', 'drums', 'piano']
            },
            'mysteryBox': ['melody', 'rhythm', 'harmony', 'pop music', 'folk music']
        },
        'Unit 10 - Shopping': {
            'dragDrop': {
                'sentence': 'My mom goes to the... every morning to buy fresh vegetables.',
                'correctWord': 'market',
                'wordBank': ['market', 'mall', 'supermarket']
            },
            'mysteryBox': ['cash', 'credit card', 'online shopping', 'department store']
        },
        'Unit 11 - Technology': {
            'dragDrop': {
                'sentence': 'You can use your phone to... a picture and send it to your friends.',
                'correctWord': 'take',
                'wordBank': ['make', 'take', 'do']
            },
            'mysteryBox': ['app', 'screen', 'device', 'upload', 'download']
        },
        'Unit 12 - Art': {
            'dragDrop': {
                'sentence': 'He is very good at... cartoons for children\'s books.',
                'correctWord': 'drawing',
                'wordBank': ['drawing', 'painting', 'sculpting']
            },
            'mysteryBox': ['sculpture', 'painting', 'artist', 'museum']
        },
        'Unit 13 - Daily Life': {
            'dragDrop': {
                'sentence': 'I usually... my bed and get ready for school at 6 a.m.',
                'correctWord': 'make',
                'wordBank': ['make', 'do', 'go']
            },
            'mysteryBox': ['wake up', 'get dressed', 'have breakfast', 'go to school']
        },
        'Unit 14 - Family': {
            'dragDrop': {
                'sentence': 'My little brother is very...',
                'correctWord': 'naughty',
                'wordBank': ['naughty', 'polite', 'kind']
            },
            'mysteryBox': ['parents', 'siblings', 'cousins', 'grandparents']
        },
        'Unit 15 - Holidays': {
            'dragDrop': {
                'sentence': 'We are going to visit my grandparents on...',
                'correctWord': 'holiday',
                'wordBank': ['holiday', 'work', 'school']
            },
            'mysteryBox': ['celebration', 'festival', 'vacation', 'trip']
        },
        'Unit 16 - Weather': {
            'dragDrop': {
                'sentence': 'The sky is clear and the sun is...',
                'correctWord': 'shining',
                'wordBank': ['raining', 'shining', 'cloudy']
            },
            'mysteryBox': ['sunny', 'windy', 'stormy', 'snowing']
        },
        'Unit 17 - Jobs': {
            'dragDrop': {
                'sentence': 'A... helps people when they are sick.',
                'correctWord': 'doctor',
                'wordBank': ['teacher', 'doctor', 'firefighter']
            },
            'mysteryBox': ['nurse', 'engineer', 'police officer', 'job description']
        },
        'Unit 18 - Places': {
            'dragDrop': {
                'sentence': 'The... has a lot of old books.',
                'correctWord': 'library',
                'wordBank': ['library', 'cinema', 'park']
            },
            'mysteryBox': ['school', 'hospital', 'bank', 'post office']
        }
    };

    const contentContainer = document.getElementById('contentContainer');
    const shuffleButton = document.getElementById('shuffleButton');

    function createContentCards() {
        // Clear previous content
        contentContainer.innerHTML = '';
        
        // Get all topics into a single array
        const allTopics = Object.keys(vocabData);
        
        // Shuffle the topics array
        const shuffledTopics = shuffleArray(allTopics);

        // Display shuffled topics in cards
        shuffledTopics.forEach(topicKey => {
            const topicData = vocabData[topicKey];
            const card = document.createElement('div');
            card.classList.add('card');
            
            // Randomly choose an activity type for each card
            const activityTypes = ['dragDrop', 'mysteryBox'];
            const randomActivity = activityTypes[Math.floor(Math.random() * activityTypes.length)];

            let activityContent = '';
            if (randomActivity === 'dragDrop' && topicData.dragDrop) {
                const parts = topicData.dragDrop.sentence.split('...');
                const wordBank = shuffleArray(topicData.dragDrop.wordBank);
                activityContent = `
                    <div class="drag-drop-container">
                        <div class="sentence-container">
                            <span class="sentence-part">${parts[0]}</span>
                            <div class="drop-zone" data-correct-word="${topicData.dragDrop.correctWord}" draggable="false"></div>
                            <span class="sentence-part">${parts[1]}</span>
                        </div>
                        <div class="word-bank">
                            ${wordBank.map(word => `<div class="draggable-word" draggable="true">${word}</div>`).join('')}
                        </div>
                    </div>
                `;
            } else if (randomActivity === 'mysteryBox' && topicData.mysteryBox) {
                 const randomWord = topicData.mysteryBox[Math.floor(Math.random() * topicData.mysteryBox.length)];
                 activityContent = `
                    <div class="mystery-box-container">
                        <div class="mystery-box">Click Me!</div>
                        <span class="mystery-word" style="display: none;">${randomWord}</span>
                        <textarea class="sentence-input" placeholder="Đặt câu với từ vựng..."></textarea>
                    </div>
                 `;
            }

            card.innerHTML = `
                <h2>${topicKey}</h2>
                ${activityContent}
            `;
            contentContainer.appendChild(card);
        });

        setupEventListeners();
    }

    // Function to set up event listeners for all dynamically created elements
    function setupEventListeners() {
        // Drag and Drop Logic
        const dropZones = document.querySelectorAll('.drop-zone');
        const draggableWords = document.querySelectorAll('.draggable-word');

        draggableWords.forEach(word => {
            word.addEventListener('dragstart', e => {
                e.dataTransfer.setData('text/plain', e.target.textContent);
            });
        });

        dropZones.forEach(zone => {
            zone.addEventListener('dragover', e => {
                e.preventDefault();
                zone.classList.add('hovered');
            });
            zone.addEventListener('dragleave', () => {
                zone.classList.remove('hovered');
            });
            zone.addEventListener('drop', e => {
                e.preventDefault();
                zone.classList.remove('hovered');
                const droppedWord = e.dataTransfer.getData('text/plain');
                if (droppedWord === zone.dataset.correctWord) {
                    zone.textContent = droppedWord;
                    zone.style.backgroundColor = '#d4edda';
                    zone.style.borderColor = '#155724';
                } else {
                    zone.textContent = 'Sai!';
                    zone.style.backgroundColor = '#f8d7da';
                    zone.style.borderColor = '#721c24';
                }
            });
        });

        // Mystery Box Logic
        const mysteryBoxes = document.querySelectorAll('.mystery-box');
        mysteryBoxes.forEach(box => {
            box.addEventListener('click', () => {
                const mysteryWordElement = box.nextElementSibling;
                if (mysteryWordElement.style.display === 'none') {
                    mysteryWordElement.style.display = 'block';
                    box.textContent = 'Click to Hide';
                    box.classList.add('uncovered');
                } else {
                    mysteryWordElement.style.display = 'none';
                    box.textContent = 'Click Me!';
                    box.classList.remove('uncovered');
                }
            });
        });
    }

    // Fisher-Yates shuffle algorithm
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    // Event listener for the shuffle button
    shuffleButton.addEventListener('click', createContentCards);

    // Initial load of content
    createContentCards();
});