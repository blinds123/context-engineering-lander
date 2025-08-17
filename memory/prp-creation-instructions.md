# PRP (Product Requirements Prompt) Creation Instructions

## Core Principles
1. **Documentation as Absolute Truth** - Never use prior knowledge, only freshly scraped documentation
2. **Exhaustive Research** - 100-300 pages minimum from official docs
3. **Production Ready** - Everything must work perfectly through Docker
4. **Intelligent Agents** - Multi-step workflows with 5+ prompts, decision-making capabilities

## Research Phase Workflow

### 1. Initial Documentation Gathering
- Identify all official documentation sources
- Use Jina to scrape each documentation page
- Retry failed scrapes until successful
- Store in `/research/[technology]/page[n].md` structure

### 2. Documentation Processing
- Create `llm.txt` summary from all scraped content
- Identify exact model names and API endpoints
- Extract code examples and patterns
- Note authentication methods and requirements

### 3. PRP Document Structure
```
# Product Requirements Prompt

## 1. Project Overview
- Clear problem statement
- Target audience
- Success metrics

## 2. Technical Requirements
- Technologies (from scraped docs)
- API integrations
- Performance requirements
- Docker configuration

## 3. Functional Requirements
- Core features
- User workflows
- Agent specifications

## 4. Implementation Details
- File structure (max 500 lines per file)
- Module separation
- Testing strategy
- Deployment process

## 5. Quality Standards
- Unit test coverage
- Docker validation
- Browser testing with Playwright
- Self-improvement through logs
```

## Agent Design Requirements
1. **Intelligence Level** - Design as intelligent humans with reasoning
2. **Decision Making** - Not programmatic solutions but AI-driven choices
3. **Research Capability** - Ability to use Jina for independent research
4. **Workflow Depth** - Minimum 5 prompts in workflow
5. **Context Awareness** - Each iteration knows previous iterations
6. **Dynamic Prompts** - No hardcoded examples, context-driven

## Development Standards

### Code Organization
```
/project/
  /agents/
    agent.py      # Main agent logic
    tools.py      # Agent tools
    prompts.py    # Dynamic prompts
  /modules/
    [feature1]/   # Under 500 lines each
    [feature2]/
  /tests/
    test_*.py     # Pytest unit tests
  /docker/
    Dockerfile
    docker-compose.yml
  /research/
    /[technology]/
      page1.md
      llm.txt
```

### Testing Requirements
- Unit tests for all features
- Edge case coverage
- Failure case handling
- Docker-based test execution
- Playwright browser testing

## Deployment Process
1. **New GitHub Repo** - Never overwrite existing projects
2. **GitHub Actions** - CI/CD pipeline
3. **New Netlify Site** - Fresh deployment
4. **MCP Integration** - Use MCP tools for deployment
5. **Verification** - Playwright screenshots and logs

## Quality Checklist
- [ ] 100-300 pages researched
- [ ] All code under 500 lines per file
- [ ] Docker configuration complete
- [ ] Unit tests passing
- [ ] Browser testing verified
- [ ] Production ready
- [ ] Self-improving through logs
- [ ] Documentation complete

## Important Reminders
- **Parallel Operations** - Run multiple tools simultaneously for efficiency
- **Ultrathink** - Deep analysis before each phase
- **No Assumptions** - Only use scraped documentation
- **Self-Testing** - Verify everything works through Docker
- **Screenshot Validation** - Use Playwright to verify UI/UX