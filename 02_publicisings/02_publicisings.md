```
- byoungikhwang.github.io/study_vibecodings/senior_ai_guide
- 아래 내용을 분석해서 적용, 
- 위의 home page vs code 에서 다시 구성 할 수 있는 프롬프트 출력.
-  prompt markdown. file 출력
[아래 내용]
 + 하위 메뉴 구성 : 최소 하나 메뉴는 CRUD 포함
 + 관리자 화면 구성
 + JSON 방식 프롬프트 권장 참고 링크: https://github.com/ParkYounghu/study_vibecodings/blob/main/codes/20_vibecodings_concepts/shotdocs.md
- 참조 : https://startbootstrap.com/templates

--------
{
  "PromptTitle": "GitHub Pages (Senior AI Guide) 재구성 및 기능 추가 개발 지시서",
  "TargetSystem": {
    "HomePageURL": "byoungikhwang.github.io/study_vibecodings/senior_ai_guide",
    "DevelopmentTool": "VS Code",
    "TemplateReference": "Start Bootstrap (권장: SB Admin 2 또는 유사한 대시보드/블로그 템플릿)",
    "Goal": "학습 가이드 페이지에 **관리자 대시보드**와 **CRUD 기능**을 통합한 구조로 재구성"
  },
  "Requirements": [
    {
      "ID": "R1_BaseTemplate",
      "Description": "Start Bootstrap에서 선정된 템플릿을 기반으로 기본 페이지 구조(헤더, 네비게이션, 푸터)를 설정하고, 기존 'Senior AI Guide'의 내용을 새 레이아웃에 마이그레이션 합니다.",
      "Reference": "https://startbootstrap.com/templates"
    },
    {
      "ID": "R2_MenuStructure",
      "Description": "페이지 상단 또는 사이드바에 다음과 같은 메인 및 하위 메뉴를 구성합니다. (총 4개 메인 메뉴)",
      "Configuration": [
        {"MenuName": "홈", "Path": "/index.html", "Type": "Static"},
        {"MenuName": "AI 학습 가이드", "Path": "/guide.html", "Type": "Sub-Menu Parent", "SubMenus": ["기초 이론", "모델링 실습", "배포 전략"]},
        {"MenuName": "자료 관리 (CRUD)", "Path": "/admin/data-crud.html", "Type": "CRUD", "Note": "**R3 CRUD 기능 구현 필수**"},
        {"MenuName": "관리자 대시보드", "Path": "/admin/dashboard.html", "Type": "Admin Panel", "Note": "**R4 관리자 화면 구현 필수**"}
      ]
    },
    {
      "ID": "R3_CRUD_Implementation",
      "Description": "메뉴 '자료 관리 (CRUD)'에 **CRUD** (Create, Read, Update, Delete) 기능을 구현합니다.",
      "Details": [
        "**Read (조회)**: Bootstrap Table을 사용하여 목록을 표시합니다.",
        "**Create (생성)**: '새 항목 추가' 버튼 클릭 시, Bootstrap Modal을 띄워 입력 폼을 제공합니다.",
        "**Update (수정)**: 테이블 각 항목에 '수정' 버튼을 추가하고, 클릭 시 Modal을 통해 기존 내용을 수정할 수 있도록 합니다.",
        "**Delete (삭제)**: 테이블 각 항목에 '삭제' 버튼을 추가하고, 확인 후 목록에서 제거합니다.",
        "**Data Storage**: GitHub Pages의 정적 특성을 고려하여, **Local Storage**를 사용하여 데이터를 저장 및 관리하는 방식으로 구현합니다."
      ]
    },
    {
      "ID": "R4_AdminScreenDesign",
      "Description": "메뉴 '관리자 대시보드'에 **관리자 화면**을 구성합니다.",
      "Details": [
        "**Layout**: SB Admin 2 등의 템플릿에서 제공하는 대시보드 레이아웃을 활용합니다.",
        "**Elements**: 가상의 '사용자 통계 카드', '최근 활동 테이블', '학습 자료 등록 현황 차트' (Mock Data 사용) 등의 요소를 배치하여 관리자 기능을 시각적으로 구현합니다."
      ]
    }
  ],
  "DevelopmentStepsSummary": [
    "1. VS Code에서 Start Bootstrap 템플릿 프로젝트 구성",
    "2. R2에 따라 HTML 파일(data-crud.html, dashboard.html 등) 및 폴더(admin/) 생성 및 네비게이션 링크 조정",
    "3. R3의 CRUD 로직(HTML/CSS/JS 및 Local Storage) 구현",
    "4. R4의 관리자 대시보드 UI/UX 구성",
    "5. GitHub Pages에 커밋 및 배포"
  ],
  "FormatReference": "https://github.com/ParkYounghu/study_vibecodings/blob/main/codes/20_vibecodings_concepts/shotdocs.md"
}

항목,내용
Prompt Markdown,위에 제시된 JSON 프롬프트 (Markdown 코드 블록 포함)
GitHub Page URL,byoungikhwang.github.io/study_vibecodings/senior_ai_guide
```