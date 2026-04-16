import { Globe, ExternalLink, Mail } from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-[#FDFDFD] text-[#1A1A1A] selection:bg-black selection:text-white">
      <div className="flex flex-col lg:flex-row min-h-screen">
        
        {/* Left Pane: Branding & Bio */}
        <aside className="lg:w-[40%] lg:border-r border-[#EAEAEA] p-8 md:p-12 lg:p-16 flex flex-col justify-between lg:sticky lg:top-0 lg:h-screen">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="font-serif italic text-7xl md:text-8xl lg:text-[110px] leading-[0.85] mb-8 -ml-1">
              Joowon<br />Moon
            </h1>
            
            <div className="inline-block bg-black text-white text-[13px] font-bold px-3 py-1 mb-10 tracking-wider">
              SOFTWARE ENGINEER
            </div>
            
            <div className="space-y-6 max-w-md">
              <p className="text-[15px] leading-relaxed text-[#444]">
                AI와 데이터로 개발 파이프라인을 혁신하는 소프트웨어 엔지니어 문주원입니다.
              </p>
              <p className="text-[15px] leading-relaxed text-[#444]">
                5년 차 Software Engineer로, React 생태계에 대한 깊은 이해를 바탕으로 <strong className="text-black font-semibold">AI Agentic Workflow</strong>와 데이터를 적극 활용하여 복잡한 비즈니스 문제를 해결합니다.
              </p>
            </div>
          </motion.div>

          <motion.div 
            className="mt-12 lg:mt-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <a 
              href="mailto:iismoon@naver.com" 
              className="inline-flex items-center gap-2 text-[13px] font-bold border-b-2 border-black pb-1 hover:opacity-70 transition-opacity"
            >
              <Mail className="w-4 h-4" />
              iismoon@naver.com
            </a>
          </motion.div>
        </aside>

        {/* Right Pane: Content */}
        <main className="lg:w-[60%] p-8 md:p-12 lg:p-16 space-y-24">
          
          {/* Experience Section */}
          <section id="experience">
            <span className="section-title">Core Experience</span>
            <div className="space-y-16">
              
              {/* Company 1 */}
              <motion.div 
                className="border-l-3 border-black pl-6 md:pl-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={itemVariants}
              >
                <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4 gap-2">
                  <h3 className="text-xl font-bold">Thaki Cloud Korea</h3>
                  <span className="text-[11px] font-bold text-[#999] tracking-wider">2025.10 — PRESENT</span>
                </div>
                <p className="text-[13px] font-bold text-[#2563EB] mb-4">k8s 기반 MFA 환경 및 AI 에이전틱 워크플로우 구축</p>
                <ul className="text-[13px] leading-relaxed text-[#666] space-y-3 list-disc list-outside ml-4">
                  <li><strong className="text-black">하네스(Harness) 기법 기반 AI 체계 구축:</strong> Codex 도입으로 AI 생성 코드의 정합성 검증 및 일관된 품질 유지</li>
                  <li><strong className="text-black">AI 에이전트 기반 Intelligent UI:</strong> LLM 연동 및 자연어 요청 분석을 통한 메뉴 자동 라우팅, 폼 필드 자동 완성</li>
                  <li><strong className="text-black">k8s 리소스 양방향 변환:</strong> YAML 원문과 UI Form 간의 정밀 파싱/역직렬화 인프라 관리 프로세스 구축</li>
                  <li><strong className="text-black">독립적 MFA 파이프라인:</strong> Module Federation 기반 개별 스토리지 독립 빌드/배포 환경 구축</li>
                  <li><strong className="text-black">실시간 원격 제어:</strong> WebSocket 및 xterm.js 연동 웹 기반 컨테이너 실시간 터미널 개발</li>
                </ul>
              </motion.div>

              {/* Company 2 */}
              <motion.div 
                className="border-l-3 border-black pl-6 md:pl-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={itemVariants}
              >
                <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4 gap-2">
                  <h3 className="text-xl font-bold">Jobis & Villains</h3>
                  <span className="text-[11px] font-bold text-[#999] tracking-wider">2024.04 — 2025.10</span>
                </div>
                <p className="text-[13px] font-bold text-[#2563EB] mb-4">삼쩜삼 및 세무회계 TA 솔루션 성능 최적화</p>
                <ul className="text-[13px] leading-relaxed text-[#666] space-y-3 list-disc list-outside ml-4">
                  <li><strong className="text-black">종합부동산세 서비스 주도:</strong> 딜로이트 안진 협업 대규모 세무회계 TA 서비스 개발 및 운영</li>
                  <li><strong className="text-black">성능 고도화:</strong> Code Splitting 및 Preload 최적화로 초기 로딩 속도 70% 개선</li>
                  <li><strong className="text-black">UX 혁신:</strong> Optimistic Update 및 Zustand 전환으로 불필요한 리렌더링 해결</li>
                  <li><strong className="text-black">자동화 파이프라인:</strong> Swagger MCP 기반 API 매핑 자동화로 개발 리소스 50% 절감</li>
                  <li><strong className="text-black">데이터 기반 성장:</strong> Amplitude A/B 테스트 및 이벤트 로그 적용으로 의사결정 지원</li>
                </ul>
                <div className="mt-6 flex flex-wrap gap-4">
                  <a href="https://www.3o3.co.kr/" target="_blank" rel="noopener noreferrer" className="text-[11px] font-bold flex items-center gap-1 hover:underline">
                    <Globe className="w-3 h-3" /> 삼쩜삼 웹사이트
                  </a>
                  <a href="https://3o3-partner-center.com/ta-%ec%86%94%eb%a3%a8%ec%85%98-%ec%86%8c%ea%b0%9c" target="_blank" rel="noopener noreferrer" className="text-[11px] font-bold flex items-center gap-1 hover:underline">
                    <ExternalLink className="w-3 h-3" /> TA 솔루션 소개
                  </a>
                </div>
              </motion.div>

              {/* Company 3 & 4 */}
              <motion.div 
                className="border-l-3 border-[#EEE] pl-6 md:pl-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={itemVariants}
              >
                <div className="space-y-12">
                  <div>
                    <div className="flex justify-between items-baseline mb-4">
                      <h3 className="text-xl font-bold">Tmax Wapl</h3>
                      <span className="text-[11px] font-bold text-[#999] tracking-wider">2023.04 — 2024.03</span>
                    </div>
                    <p className="text-[13px] font-bold text-[#666] mb-4">Researcher | Frontend Developer</p>
                    <ul className="text-[13px] leading-relaxed text-[#666] space-y-2 list-disc list-outside ml-4">
                      <li><strong className="text-black">SuperApp 통합 웹 서비스 개발:</strong> Tmax 생태계 공통 인증, 페르소나 관리 라이브러리 및 WAPL Core/Shell 개발</li>
                      <li><strong className="text-black">B2B SaaS 솔루션 커스터마이징:</strong> 서울시 교육청 등 고객사 맞춤형 기능 개발 및 배포</li>
                      <li><strong className="text-black">글로벌 컨퍼런스 기술 지원:</strong> AWS re:Invent 2023 행사 시연용 SuperApp 기능 개발</li>
                    </ul>
                  </div>
                  <div>
                    <div className="flex justify-between items-baseline mb-4">
                      <h3 className="text-xl font-bold">KT DS</h3>
                      <span className="text-[11px] font-bold text-[#999] tracking-wider">2022.01 — 2023.04</span>
                    </div>
                    <p className="text-[13px] font-bold text-[#666] mb-4">Software Engineer</p>
                    <ul className="text-[13px] leading-relaxed text-[#666] space-y-2 list-disc list-outside ml-4">
                      <li><strong className="text-black">Up-Tempo 상용화 기여:</strong> Android 단말 원격 조작 통합 웹 서비스 개발 및 내부 투자 4억 원 유치</li>
                      <li><strong className="text-black">글로벌 오픈소스 기여:</strong> DeviceFarmer/stf 오픈소스 오류 수정, PR 병합 및 Contributor 등재</li>
                    </ul>
                    <div className="mt-4">
                      <a href="https://github.com/DeviceFarmer/stf" target="_blank" rel="noopener noreferrer" className="text-[11px] font-bold flex items-center gap-1 hover:underline">
                        <ExternalLink className="w-3 h-3" /> DeviceFarmer/stf GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Skills Section */}
          <section>
            <span className="section-title">Technical Palette</span>
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-3 gap-3"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                'React / Next.js', 'TypeScript', 'TanStack Query', 
                'Zustand / Redux', 'Tailwind CSS', 'Agentic WF', 
                'Kubernetes', 'Python / AWS', 'Module Federation'
              ].map(skill => (
                <motion.div 
                  key={skill} 
                  variants={itemVariants}
                  className="text-[12px] border border-[#EEE] py-3 px-4 rounded-sm text-center font-medium hover:border-black transition-colors"
                >
                  {skill}
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* Bottom Grid: Education & Awards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 border-t border-[#EAEAEA]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="section-title">Education</span>
              <div className="font-serif italic text-2xl mb-1">Dongguk Univ.</div>
              <div className="text-[11px] uppercase tracking-wider text-[#888]">Computer Science Engineering</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="section-title">Awards & Activities</span>
              <div className="space-y-6">
                <div>
                  <div className="font-serif italic text-2xl mb-1">NAVER Data Science Competition 2018</div>
                  <div className="text-[11px] uppercase tracking-wider text-[#888]">3rd Place Winner</div>
                </div>
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <div className="text-[13px] font-bold">한국IT서비스학회 2020</div>
                    <div className="text-[10px] uppercase tracking-wider text-[#999]">학술대회 논문 게재 (제1저자)</div>
                  </div>
                  <div>
                    <div className="text-[13px] font-bold">DGIST 하계 인턴십 2019</div>
                    <div className="text-[10px] uppercase tracking-wider text-[#999]">Deep Learning Research</div>
                  </div>
                  <div>
                    <div className="text-[13px] font-bold">Microsoft Student Partners 2015-2017</div>
                    <div className="text-[10px] uppercase tracking-wider text-[#999]">Technical Evangelist</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <footer className="pt-20 pb-10 text-[10px] uppercase tracking-[0.2em] text-[#BBB] text-center lg:text-left">
            © {new Date().getFullYear()} Joowon Moon. All rights reserved.
          </footer>
        </main>
      </div>
    </div>
  );
}
