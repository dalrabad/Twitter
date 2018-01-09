class Api::TweetsController < ApplicationController
  before_action :set_tweet, only: [:update, :destroy]

  def index
    render json: Tweet.all.order(created_at: :desc)
  end

  def create
    tweet = current_user.tweets.new(tweet_params)

    if tweet.save
      render json: tweet
    else
      render json: { error: 'failed to save' }, status: 422
    end
  end

  def update
    if @tweet.update(tweet_params)
      render json: @tweet
    else
      render json: { error: 'failed to save' }, status: 422
    end

  end

  def destroy
    @tweet.destroy
    render json: {}, status: 200
  end

  private
    def set_tweet
      @tweet = Tweet.find(params[:id])
    end

    def tweet_params
      params.require(:tweet).permit(:body)
    end
end
