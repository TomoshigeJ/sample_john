class AnimalsController < ApplicationController
  skip_before_action :require_login
  
  def new
    @animal = Animal.new
  end

  def create
    @animal = Animal.new(name: params[:name])
    @animal.save
    redirect_to animals_path

  end

  def index
    @animals = Animal.all
  end

  def update
  end

  def destroy
  end

  def dog; end
  def js; end
  def jsapp; end
  def jsapp2; end
  def jsapp3; end
  def jsapp4; end

  private

end
