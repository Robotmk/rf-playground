// https://api.github.com/search/issues?q=repo:robotframework/robotframework+milestone:%22v5.0%22
// https://api.github.com/repos/robotframework/robotframework/milestones

// this will get RF milestones and their issues to be shown in development-section
// Don't commit your api-key!

const ghToken = ''

async function getIssues(milestone) {
  const issues = await fetch(`https://api.github.com/search/issues?q=repo:robotframework/robotframework+milestone:${milestone.title}`, {
    headers: {
      Accept: 'application/vnd.github.v3+json',
      Authorization: `token ${ghToken}`
    }
  })
    .then((res) => res.json())
  return {
    ...milestone,
    issues
  }
}

export async function getMilestones() {
  const milestonesOpen = await fetch('https://api.github.com/repos/robotframework/robotframework/milestones', {
    headers: {
      Accept: 'application/vnd.github.v3+json',
      Authorization: `token ${ghToken}`
    }
  })
    .then((res) => res.json())
  const milestonesClosed = await fetch('https://api.github.com/repos/robotframework/robotframework/milestones?state=closed&direction=desc&per_page=3', {
    headers: {
      Accept: 'application/vnd.github.v3+json',
      Authorization: `token ${ghToken}`
    }
  })
    .then((res) => res.json())

  Promise.all([...milestonesOpen, ...milestonesClosed].map((milestone) => getIssues(milestone)))
    .then((milestonesWithIssues) => {
      const a = document.createElement('a')
      const file = new Blob([JSON.stringify(milestonesWithIssues)], { type: 'text/plain' })
      a.href = URL.createObjectURL(file)
      a.download = 'milestones.js'
      a.click()
    })
}
