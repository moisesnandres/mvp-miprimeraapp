class LandingController < ApplicationController

    def index
        render layout: 'general'
    end

    def my_profile
      render layout: 'general'
    end
end
