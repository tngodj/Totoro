function showMore(section) {
    if (section === 'bottom') {
      // 하단 포스터를 위한 더보기 버튼
      const bottomHiddenRows = document.querySelectorAll('#extra-poster');
      bottomHiddenRows.forEach(row => (row.style.display = 'flex')); // 하단 포스터 표시
      document.getElementById('show-more-bottom-posters').style.display = 'none'; // 버튼 숨김
    } else if (section === 'extra') {
      // 추가 캐릭터를 위한 더보기 버튼
      const extraHiddenRows = document.querySelectorAll('.hidden-row.extra-characters');
      extraHiddenRows.forEach(row => (row.style.display = 'flex')); // 추가 캐릭터 표시
      document.getElementById('show-more-extra-characters').style.display = 'none'; // 버튼 숨김
    }
  }

  let posters = [
    {
      title: 'Poster 1 Title',
      mainPosterSrc: '3.webp',
      characterImageSrc: '2.jpg',
      characterIntroText: 'This is the story of character 1, filled with courage and kindness.',
      description: 'A tale of adventure and heartwarming friendship unfolds with character 1 as they brave unknown lands.',
      netflixLink: 'https://www.netflix.com/kr/title/60027393?source=35',
      wavveLink: 'https://www.wavve.com/player/movie?movieid=MV_CR01_DN0000011316&autoplay=y',
    },
    {
      title: 'Poster 2 Title',
      mainPosterSrc: '4.jpeg',
      characterImageSrc: '6.jpg',
      characterIntroText: 'Character 2 embarks on a mystical journey that changes everything.',
      description: 'Follow character 2 as they embark on a journey filled with wonder and discovery.',
      netflixLink: 'https://www.netflix.com/kr/title/70028883?source=35',
      wavveLink: 'https://www.wavve.com/player/movie?movieid=MV_CR01_DN0000011324&autoplay=y',
      watchaLink: 'https://watcha.com/ko-KR/contents/mJOV1RW?utm_campaign=metadata&utm_source=google&utm_medium=search',
    },
    {
      title: 'Poster 3 Title',
      mainPosterSrc: '.jpeg',
      characterImageSrc: '.jpg',
      characterIntroText: 'Character 3 embarks on a mystical journey that changes everything.',
      description: 'Follow character 3 as they embark on a journey filled with wonder and discovery.',
      netflixLink: '',
      wavveLink: '',
      watchaLink: '',
    },
    {
      title: 'Poster 4 Title',
      mainPosterSrc: '.jpeg',
      characterImageSrc: '.jpg',
      characterIntroText: 'Character 4 embarks on a mystical journey that changes everything.',
      description: 'Follow character 4 as they embark on a journey filled with wonder and discovery.',
      netflixLink: '',
      wavveLink: '',
      watchaLink: '',
    },
    {
      title: 'Poster 5 Title',
      mainPosterSrc: '.jpeg',
      characterImageSrc: '.jpg',
      characterIntroText: 'Character 5 embarks on a mystical journey that changes everything.',
      description: 'Follow character 5 as they embark on a journey filled with wonder and discovery.',
      netflixLink: '',
      wavveLink: '',
      watchaLink: '',
    },
    {
      title: 'Poster 6 Title',
      mainPosterSrc: '.jpeg',
      characterImageSrc: '.jpg',
      characterIntroText: 'Character 6 embarks on a mystical journey that changes everything.',
      description: 'Follow character 6 as they embark on a journey filled with wonder and discovery.',
      netflixLink: '',
      wavveLink: '',
      watchaLink: '',
    },
    // 추가 포스터 데이터...
  ];

  
  function changeMainPoster(index) {
    // 현재 메인 포스터 데이터 저장
    const mainPosterData = {
      title: document.getElementById('main-title').textContent,
      mainPosterSrc: document.getElementById('main-poster').src,
      characterImageSrc: document.getElementById('character-image').src,
      characterIntroText: document.getElementById('character-intro').textContent,
      description: document.getElementById('main-description').textContent,
      netflixLink: document.getElementById('netflix-link').href,
      wavveLink: document.getElementById('wavve-link').href,
      watchaLink: document.getElementById('watcha-link').href,
    };

    // 선택된 포스터로 메인 포스터 업데이트
    document.getElementById('main-title').textContent = posters[index].title;
    document.getElementById('main-poster').src = posters[index].mainPosterSrc;
    document.getElementById('character-image').src = posters[index].characterImageSrc;
    document.getElementById('character-intro').textContent = posters[index].characterIntroText;
    document.getElementById('main-description').textContent = posters[index].description;
    document.getElementById('netflix-link').href = posters[index].netflixLink;
    document.getElementById('wavve-link').href = posters[index].wavveLink || '#';
    document.getElementById('watcha-link').href = posters[index].watchaLink || '#';

    // 포스터 배열 업데이트
    posters.splice(index, 1); // 선택된 포스터 제거
    posters.unshift(mainPosterData); // 기존 메인 포스터를 배열 앞에 추가

    // 그리드 이미지 갱신
    const posterGrid = document.getElementById('poster-grid').children;
    for (let i = 0; i < posterGrid.length; i++) {
      if (posters[i]) {
        posterGrid[i].src = posters[i].mainPosterSrc;
      }
    }
  }

