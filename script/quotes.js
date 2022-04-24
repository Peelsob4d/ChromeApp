const quotes = [
    {
        quote: "생각이야말로 진정한 힘이다. 생각은 에너지인 것이다",
        author: "엔드류메터스"
    },
    {
        quote: "타인에 대한 존경은 처세법의 제일 조건이다",
        author: "아미엘"
    },
    {
        quote: "오늘 할 수 있는 일에 전력을 다하라. 그러면 내일에는 한걸음 더 진보한다",
        author: "뉴턴"
    },
    {
        quote: "최대 다수의 행복을 얻는 행동이 최선이다",
        author: "허치슨"
    },
    {
        quote: "끝을 맺기를 처음과 같이 하면 실패가 없다",
        author: "노자"
    },
    {
        quote: "절제는 모든 미덕의 진주고리를 이어주는 비단의 실이다",
        author: "홀"
    },
    {
        quote: "1퍼센트의 가능성, 그것이 나의 길이다",
        author: "나폴레옹"
    },
    {
        quote: "일이 재미있으면 인생은 낙원이다. 일이 의무라면 인생은 지옥이다",
        author: "고리키"
    },
    {
        quote: "사람은 자기가 한 약속을 지킬만한 좋은 기억력을 가져야 한다",
        author: "니체"
    },
    {
        quote: "내일에 아무런 도움이 되지 않는다면, 당신의 과거는 쫓아버려라",
        author: "오슬러"
    },
    {
        quote: "목표란 우리들이 계속 앞으로 나아가도록 해주는 것이다",
        author: "앤드류 매튜스"
    }
];
const quote = document.querySelector("#quotes span:first-child");
const author = document.querySelector("#quotes span:last-child");
const todaysQuotes = quotes[Math.floor(Math.random()*quotes.length)];
quote.innerText = todaysQuotes.quote;
author.innerText = todaysQuotes.author;