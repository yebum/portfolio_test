// Page Navigation
const navLinks = document.querySelectorAll('.nav-link');
const pages = document.querySelectorAll('.page');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        const targetPage = link.getAttribute('data-page');
        
        // Remove active class from all pages and nav links
        pages.forEach(page => page.classList.remove('active'));
        navLinks.forEach(nav => nav.classList.remove('active'));
        
        // Add active class to clicked page and nav link
        document.getElementById(targetPage).classList.add('active');
        link.classList.add('active');

        // Smooth scroll to top
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

// Work Details Data
const workDetails = {
    work1: {
        title: "Light Interaction",
        category: "Interactive Installation",
        emoji: "💫",
        gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        subtitle: "움직임으로 만들어지는 빛의 향연",
        description: [
            "Light Interaction은 관객의 움직임을 감지하여 실시간으로 변화하는 빛의 패턴을 생성하는 인터랙티브 설치 작업입니다. 천장에 설치된 다수의 LED 조명과 적외선 센서가 공간 내 사람들의 위치와 동작을 추적하며, 이 데이터를 기반으로 독특한 빛의 풍경을 만들어냅니다.",
            "각 관객은 자신만의 빛의 흔적을 남기게 되며, 여러 사람이 동시에 참여할 때 복잡하고 아름다운 패턴이 생성됩니다. 작품은 우리의 존재와 움직임이 주변 환경에 미치는 영향을 시각화하며, 집단 창작의 경험을 제공합니다.",
            "설치 공간은 10m x 10m의 어두운 방으로, 바닥과 벽면에 반사되는 빛이 몰입감 있는 경험을 만들어냅니다. 관객들은 자유롭게 움직이며 예상치 못한 빛의 변화를 경험하게 됩니다."
        ],
        specs: {
            year: "2024",
            location: "서울 DDP",
            duration: "3개월",
            technology: "Kinect v2, Processing, LED DMX Control",
            size: "10m x 10m x 3m",
            materials: "LED strips, IR sensors, Aluminum frame"
        },
        process: [
            {
                title: "개념 개발",
                description: "관객의 움직임을 시각화하는 방법론 연구. 다양한 센싱 기술과 빛의 표현 방식을 실험했습니다."
            },
            {
                title: "기술 프로토타입",
                description: "Kinect 센서를 활용한 모션 트래킹 시스템 개발. Processing으로 실시간 데이터 처리 알고리즘을 구현했습니다."
            },
            {
                title: "공간 설치",
                description: "실제 전시 공간에 하드웨어 설치. LED 조명과 센서의 최적 배치를 위해 여러 차례 테스트를 진행했습니다."
            }
        ]
    },
    work2: {
        title: "Sonic Landscape",
        category: "Sound Art",
        emoji: "🎵",
        gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
        subtitle: "터치로 만들어가는 청각적 풍경",
        description: [
            "Sonic Landscape는 대형 터치 인터페이스를 통해 관객이 직접 소리를 생성하고 조합할 수 있는 인터랙티브 사운드 아트입니다. 3m x 2m 크기의 터치 스크린은 추상적인 시각 패턴으로 가득 차 있으며, 각 영역을 터치할 때마다 고유한 음색과 리듬이 발생합니다.",
            "여러 사람이 동시에 참여할 수 있도록 설계되어, 개인의 음악적 표현이 모여 집단적인 음향 공간을 형성합니다. 터치의 압력, 속도, 패턴에 따라 소리의 특성이 변화하며, 관객들은 직관적인 제스처만으로 복잡한 음악을 만들어낼 수 있습니다.",
            "작품은 누구나 음악을 창조할 수 있다는 민주적 예술관을 담고 있으며, 우연성과 협업을 통한 새로운 창작 방식을 제안합니다."
        ],
        specs: {
            year: "2023",
            location: "부산 현대미술관",
            duration: "2개월",
            technology: "Capacitive Touch Screen, Max/MSP, Ableton Live",
            size: "3m x 2m",
            materials: "Custom touch display, Audio interface, Speakers"
        },
        process: [
            {
                title: "사운드 디자인",
                description: "다양한 음색 샘플 제작 및 실시간 사운드 합성 알고리즘 개발. 각 터치 영역에 어울리는 소리를 디자인했습니다."
            },
            {
                title: "인터페이스 설계",
                description: "직관적인 시각-청각 매핑 시스템 구축. 터치 위치와 압력에 따른 소리 변화를 최적화했습니다."
            },
            {
                title: "사용자 테스트",
                description: "다양한 연령대와 음악적 배경을 가진 사람들과 테스트. 피드백을 반영하여 인터페이스를 개선했습니다."
            }
        ]
    },
    work3: {
        title: "Digital Waves",
        category: "Digital Installation",
        emoji: "🌊",
        gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
        subtitle: "제스처로 만드는 디지털 파도",
        description: [
            "Digital Waves는 관객의 손동작을 인식하여 대형 스크린에 디지털 파도를 생성하는 인터랙티브 설치입니다. Leap Motion 센서를 통해 손의 위치, 속도, 방향을 감지하며, 이 데이터는 실시간으로 파도의 물리 시뮬레이션에 영향을 줍니다.",
            "작품은 자연의 물리 법칙을 기반으로 하되, 관객의 제스처에 따라 초자연적인 파도 형태가 만들어집니다. 손을 천천히 움직이면 잔잔한 물결이, 빠르게 움직이면 격렬한 파도가 생성됩니다. 여러 사람이 동시에 참여하면 파도가 서로 간섭하며 복잡한 패턴을 만들어냅니다.",
            "디지털과 자연의 경계를 탐구하는 이 작품은 인간이 자연 현상에 개입하는 방식을 은유적으로 표현합니다."
        ],
        specs: {
            year: "2023",
            location: "제주 현대미술관",
            duration: "2개월",
            technology: "Leap Motion, Unity, Fluid Simulation",
            size: "5m x 3m projection",
            materials: "Projector, Leap Motion sensor, Computer"
        },
        process: [
            {
                title: "물리 시뮬레이션",
                description: "Unity에서 파도의 물리 엔진 구현. 실제 파도의 움직임을 연구하고 디지털로 재현했습니다."
            },
            {
                title: "제스처 인식",
                description: "Leap Motion을 활용한 손동작 추적 시스템 개발. 다양한 제스처 패턴을 분석했습니다."
            },
            {
                title: "시각 효과",
                description: "아름답고 몰입감 있는 파도 렌더링. 빛의 반사와 투명도를 조절하여 사실감을 높였습니다."
            }
        ]
    },
    work4: {
        title: "Augmented Reality Art",
        category: "AR Experience",
        emoji: "🎭",
        gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
        subtitle: "현실 위에 펼쳐지는 가상의 예술",
        description: [
            "Augmented Reality Art는 스마트폰 앱을 통해 실제 전시 공간에 가상의 예술작품을 겹쳐 보여주는 AR 프로젝트입니다. 관객들은 자신의 스마트폰으로 QR 코드를 스캔하여 앱을 실행하고, 카메라를 통해 공간을 비추면 3D 가상 조형물들이 나타납니다.",
            "각 작품은 특정 위치에 고정되어 있지만, 관객이 움직이며 360도 모든 각도에서 감상할 수 있습니다. 또한 터치 인터랙션을 통해 작품의 색상, 크기, 애니메이션을 변경할 수 있어 개인화된 감상 경험을 제공합니다.",
            "이 작품은 물리적 전시 공간의 한계를 넘어 무한한 가상 전시의 가능성을 탐구하며, 관객들이 직접 큐레이터가 되어 자신만의 전시를 만들 수 있게 합니다."
        ],
        specs: {
            year: "2024",
            location: "인천 아트센터",
            duration: "3개월",
            technology: "ARKit, Unity, 3D Modeling",
            platform: "iOS, Android App",
            models: "15+ 3D virtual sculptures"
        },
        process: [
            {
                title: "3D 모델링",
                description: "다양한 추상 조형물 디자인 및 제작. Blender와 Cinema 4D를 사용하여 15개 이상의 작품을 모델링했습니다."
            },
            {
                title: "AR 개발",
                description: "Unity와 ARKit을 활용한 앱 개발. 공간 인식과 물체 배치 시스템을 구현했습니다."
            },
            {
                title: "인터랙션 디자인",
                description: "직관적인 터치 제스처 인터페이스 설계. 사용자가 쉽게 작품을 조작할 수 있도록 했습니다."
            }
        ]
    },
    work5: {
        title: "Touch Patterns",
        category: "Generative Art",
        emoji: "🖐️",
        gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
        subtitle: "터치 습관으로 만드는 개인의 예술",
        description: [
            "Touch Patterns는 관객의 터치 패턴을 분석하여 고유한 시각적 작품을 생성하는 제너레이티브 아트입니다. 대형 터치스크린 위에서 자유롭게 터치하고 스와이프하면, 시스템이 터치의 속도, 압력, 방향, 리듬 등을 실시간으로 분석합니다.",
            "수집된 데이터는 알고리즘을 통해 추상적인 시각 패턴으로 변환됩니다. 같은 사람이라도 감정 상태나 시간에 따라 다른 패턴이 생성되며, 각 작품은 그 순간의 감각적 경험을 시각화합니다. 완성된 작품은 이메일로 전송받을 수 있습니다.",
            "이 프로젝트는 우리의 무의식적인 행동 패턴이 얼마나 개인적이고 예술적일 수 있는지를 보여주며, 모든 사람이 내재된 창의성을 가지고 있음을 드러냅니다."
        ],
        specs: {
            year: "2022",
            location: "대구 미술관",
            duration: "2개월",
            technology: "Capacitive Touch, Processing, Machine Learning",
            size: "2m x 1.5m display",
            algorithms: "Pattern recognition, Generative algorithms"
        },
        process: [
            {
                title: "데이터 수집",
                description: "다양한 사람들의 터치 패턴 데이터를 수집하고 분석. 개인별 터치 특성을 파악했습니다."
            },
            {
                title: "알고리즘 개발",
                description: "터치 데이터를 시각 패턴으로 변환하는 제너레이티브 알고리즘 설계. Processing으로 구현했습니다."
            },
            {
                title: "시각화 최적화",
                description: "아름답고 다양한 패턴이 생성되도록 색상과 형태 시스템을 조정. 수백 번의 테스트를 진행했습니다."
            }
        ]
    },
    work6: {
        title: "Space Transformation",
        category: "Projection Mapping",
        emoji: "🌌",
        gradient: "linear-gradient(135deg, #d299c2 0%, #fef9d7 100%)",
        subtitle: "프로젝션으로 변화하는 공간의 차원",
        description: [
            "Space Transformation은 프로젝션 매핑 기술을 활용하여 실제 건축 공간을 디지털 캔버스로 변환하는 대규모 설치 작업입니다. 건물의 외벽이나 내부 공간의 형태를 정밀하게 스캔하고, 이에 맞춰 제작된 영상을 투사하여 공간 자체가 살아 움직이는 듯한 경험을 만들어냅니다.",
            "관객의 위치와 움직임을 추적하는 센서가 설치되어 있어, 사람들이 움직일 때마다 투사되는 이미지가 실시간으로 반응합니다. 벽이 물결치고, 창문이 우주로 열리며, 바닥이 깊은 심연으로 변하는 등 공간에 새로운 차원의 경험을 부여합니다.",
            "이 작품은 물리적 공간의 고정된 개념에 도전하며, 디지털 기술을 통해 건축과 예술의 경계를 허무는 새로운 공간 경험을 제안합니다."
        ],
        specs: {
            year: "2024",
            location: "광주 비엔날레",
            duration: "1개월",
            technology: "Projection Mapping, MadMapper, Kinect",
            projectors: "6 units, 20,000 lumens each",
            area: "300㎡ building facade"
        },
        process: [
            {
                title: "3D 스캐닝",
                description: "건물의 형태를 정밀하게 3D 스캔. 모든 돌출부와 창문의 위치를 정확히 매핑했습니다."
            },
            {
                title: "콘텐츠 제작",
                description: "건물 형태에 맞는 영상 콘텐츠 제작. After Effects와 Cinema 4D로 다양한 시각 효과를 만들었습니다."
            },
            {
                title: "인터랙션 통합",
                description: "Kinect 센서를 활용한 관객 추적 시스템. 실시간으로 영상이 관객의 움직임에 반응하도록 했습니다."
            }
        ]
    }
};

// Work Card Click Event
const workCards = document.querySelectorAll('.work-card');
workCards.forEach(card => {
    card.addEventListener('click', () => {
        const workId = card.getAttribute('data-work');
        showWorkDetail(workId);
    });
});

// Show Work Detail
function showWorkDetail(workId) {
    const work = workDetails[workId];
    const detailContent = document.getElementById('detailContent');
    
    // Generate process HTML
    const processHTML = work.process.map((step, index) => `
        <div class="process-step">
            <div class="process-number">${index + 1}</div>
            <h3>${step.title}</h3>
            <p>${step.description}</p>
        </div>
    `).join('');

    // Generate specs HTML
    const specsHTML = Object.entries(work.specs).map(([key, value]) => `
        <div class="spec-item">
            <h4>${key}</h4>
            <p>${value}</p>
        </div>
    `).join('');

    // Generate description HTML
    const descriptionHTML = work.description.map(p => `<p>${p}</p>`).join('');

    detailContent.innerHTML = `
        <div class="detail-hero">
            <div class="detail-hero-image" style="background: ${work.gradient};">
                ${work.emoji}
            </div>
        </div>

        <div class="detail-title">
            <div class="detail-category">${work.category}</div>
            <h1>${work.title}</h1>
            <p>${work.subtitle}</p>
        </div>

        <div class="detail-info-grid">
            <div class="detail-description">
                <h2>작품 소개</h2>
                ${descriptionHTML}
            </div>
            
            <div class="detail-specs">
                <h3>작품 정보</h3>
                ${specsHTML}
            </div>
        </div>

        <div class="detail-process">
            <h2>제작 과정</h2>
            <div class="process-grid">
                ${processHTML}
            </div>
        </div>

        <div class="detail-gallery">
            <h2>갤러리</h2>
            <div class="gallery-grid">
                <div class="gallery-item" style="background: ${work.gradient};">📸</div>
                <div class="gallery-item" style="background: ${work.gradient};">🎬</div>
                <div class="gallery-item" style="background: ${work.gradient};">🖼️</div>
                <div class="gallery-item" style="background: ${work.gradient};">📹</div>
            </div>
        </div>
    `;

    // Show detail page
    pages.forEach(page => page.classList.remove('active'));
    document.getElementById('workDetailPage').classList.add('active');
    
    // Update nav
    navLinks.forEach(nav => nav.classList.remove('active'));

    // Scroll to top
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Back Button
document.getElementById('backButton').addEventListener('click', () => {
    pages.forEach(page => page.classList.remove('active'));
    document.getElementById('worksPage').classList.add('active');
    
    navLinks.forEach(nav => nav.classList.remove('active'));
    document.querySelector('[data-page="worksPage"]').classList.add('active');

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Add smooth scroll behavior
document.documentElement.style.scrollBehavior = 'smooth';