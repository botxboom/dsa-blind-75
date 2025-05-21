const { Octokit } = require("@octokit/rest");

const token = process.env.GITHUB_TOKEN;
const octokit = new Octokit({ auth: token });

async function run() {
  const [owner, repo] = process.env.GITHUB_REPOSITORY.split("/");
  const prNumber = process.env.GITHUB_REF.match(/refs\/pull\/(\d+)\/.*/)[1];

  const reviews = await octokit.pulls.listReviews({
    owner,
    repo,
    pull_number: prNumber,
  });

  const comments = await octokit.pulls.listReviewComments({
    owner,
    repo,
    pull_number: prNumber,
  });

  console.log("Reviews:");
  reviews.data.forEach((review) => {
    console.log(`Reviewer: ${review.user.login}`);
    console.log(`State: ${review.state}`);
    console.log(`Body: ${review.body}`);
    console.log("---");
  });

  console.log("Review Comments:");
  comments.data.forEach((comment) => {
    console.log(`[${comment.user.login}] ${comment.body}`);
  });
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
